// app/components/ProductDetailClient.jsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../providers/CartProvider";

export default function ProductDetailClient({ product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const router = useRouter();
  const priceNumeric = product.price_numeric ?? Number((product.price||"0").replace(/[^0-9]/g,""));

  function handleAdd() {
    addItem({ id: product.id, title: product.title, price: product.price, priceNumeric, img: product.img }, qty);
    // ideally use a toast — for now:
    alert("Added to cart");
  }

  function handleBuyNow() {
    addItem({ id: product.id, title: product.title, price: product.price, priceNumeric, img: product.img }, qty);
    router.push("/checkout");
  }

  return (
    <main className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <img src={product.img} alt={product.title} className="w-full h-96 object-cover rounded-2xl" />
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <div className="text-gray-600 mt-2">{product.category}</div>
          <div className="text-2xl font-extrabold mt-4">₹{priceNumeric.toLocaleString()}</div>
          <p className="mt-4 text-gray-700">{product.sub}</p>

          <h4 className="mt-4 font-semibold">Features</h4>
          <ul className="list-disc ml-5 text-sm">
            {product.features?.map(f => <li key={f}>{f}</li>)}
          </ul>

          <h4 className="mt-3 font-semibold">Uses</h4>
          <ul className="list-disc ml-5 text-sm">
            {product.uses?.map(u => <li key={u}>{u}</li>)}
          </ul>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center border rounded">
              <button onClick={() => setQty(q=>Math.max(1,q-1))} className="px-3">-</button>
              <div className="px-4">{qty}</div>
              <button onClick={() => setQty(q=>q+1)} className="px-3">+</button>
            </div>

            <button onClick={handleAdd} className="px-4 py-2 bg-emerald-600 text-white rounded">Add to cart</button>
            <button onClick={handleBuyNow} className="px-4 py-2 border rounded">Buy Now</button>
          </div>
        </div>
      </div>
    </main>
  );
}
