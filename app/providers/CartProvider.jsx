// app/providers/CartProvider.jsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart_v1");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("cart_v1", JSON.stringify(items));
  }, [items]);

  function addItem(product, qty=1) {
    setItems(prev => {
      const idx = prev.findIndex(p => p.id === product.id);
      if (idx > -1) {
        const next = [...prev];
        next[idx].qty += qty;
        return next;
      }
      return [...prev, {...product, qty}];
    });
  }

  function updateQty(productId, qty) {
    setItems(prev => prev.map(i => i.id === productId ? {...i, qty} : i));
  }

  function removeItem(productId) {
    setItems(prev => prev.filter(i => i.id !== productId));
  }

  function clear() {
    setItems([]);
  }

  const subtotal = items.reduce((s,i) => s + ((i.priceNumeric||i.price||0) * (i.qty||1)), 0);

  return (
    <CartContext.Provider value={{ items, addItem, updateQty, removeItem, clear, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
