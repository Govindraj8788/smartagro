// app/checkout/page.js
"use client";

import React, { useState } from "react";
import { useCart } from "../providers/CartProvider";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({ name:"", email:"", phone:"", line1:"", city:"", state:"", pincode:"" });
  const [loading, setLoading] = useState(false);

  if (!items || items.length === 0) return <div className="p-8">Your cart is empty.</div>;

  async function placeOrder(e) {
    e.preventDefault();
    setLoading(true);

    // 1) Create local order on server
    const res = await fetch("/api/orders/create", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ items, shipping: form, currency: "INR" })
    });
    const order = await res.json();
    if (!order?.id) { alert("Failed to create order"); setLoading(false); return; }

    // 2) Create Razorpay order on server
    const rz = await fetch("/api/payments/razorpay-create-order", {
      method:"POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ orderId: order.id, amount: Math.round(order.total * 100) })
    });
    const rOrder = await rz.json();
    if (!rOrder?.id) { alert("Payment creation failed"); setLoading(false); return; }

    // 3) open Razorpay
    const options = {
      key: process.env.NEXT_PUBLIC_RAZOR_KEY_ID,
      amount: rOrder.amount,
      currency: rOrder.currency,
      name: "FarmaX",
      description: `Order #${order.id}`,
      order_id: rOrder.id,
      handler: async function(response) {
        // confirm with server
        await fetch("/api/orders/confirm-payment", {
          method:"POST",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify({
            orderId: order.id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature
          })
        });
        clear();
        router.push(`/order/success/${order.id}`);
      },
      prefill: { name: form.name, email: form.email, contact: form.phone }
    };

    // load script if needed
    if (!window.Razorpay) {
      const s = document.createElement("script");
      s.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.body.appendChild(s);
      s.onload = () => new window.Razorpay(options).open();
    } else {
      new window.Razorpay(options).open();
    }

    setLoading(false);
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <form onSubmit={placeOrder} className="space-y-4">
          <input required placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full border rounded p-2" />
          <input required placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full border rounded p-2" />
          <input required placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full border rounded p-2" />
          <input required placeholder="Address" value={form.line1} onChange={e=>setForm({...form,line1:e.target.value})} className="w-full border rounded p-2" />
          <div className="grid grid-cols-3 gap-2">
            <input required placeholder="City" value={form.city} onChange={e=>setForm({...form,city:e.target.value})} className="border rounded p-2" />
            <input required placeholder="State" value={form.state} onChange={e=>setForm({...form,state:e.target.value})} className="border rounded p-2" />
            <input required placeholder="Pincode" value={form.pincode} onChange={e=>setForm({...form,pincode:e.target.value})} className="border rounded p-2" />
          </div>

          <div className="mt-4">
            <div className="text-sm text-gray-500">Amount to pay</div>
            <div className="text-xl font-bold">₹{subtotal}</div>
          </div>

          <button disabled={loading} className="px-4 py-2 bg-emerald-600 text-white rounded">
            {loading ? "Processing..." : "Pay securely"}
          </button>
        </form>

        <aside className="p-4 border rounded">
          <h3 className="font-semibold">Order summary</h3>
          <ul className="mt-3 space-y-2">
            {items.map(i => (
              <li key={i.id} className="flex justify-between">
                <div>{i.title} x {i.qty}</div>
                <div>₹{(i.priceNumeric||i.price).toLocaleString()}</div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between font-bold">Total <span>₹{subtotal}</span></div>
        </aside>
      </div>
    </main>
  );
}
