"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/api/cart/get")
      .then((res) => res.json())
      .then((data) => setCart(data.cart));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cart.length === 0 && <p>No items in cart.</p>}

      {cart.map((item) => (
        <div
          key={item._id}
          className="flex items-center gap-6 border p-4 rounded-lg mb-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 object-cover"
          />
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p>Quantity: {item.quantity}</p>
            <p className="font-bold text-emerald-600">
              {item.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}