"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Search, Star, X, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import PRODUCTS from "../lib/products";

export default function ProductsPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))],
    [],
  );

  const filtered = useMemo(() => {
    return PRODUCTS.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.sub.toLowerCase().includes(query.toLowerCase())),
    );
  }, [query, category]);

  // Load cart count
  const loadCartCount = async () => {
    const res = await fetch("/api/cart/get");
    const data = await res.json();
    setCartCount(data.cart?.length || 0);
  };

  useEffect(() => {
    if (session) loadCartCount();
  }, [session]);

  const handleAddToCart = async () => {
    if (!session) {
      router.push("/api/auth/signin");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: selected.id,
          title: selected.title,
          price: selected.price,
          price_numeric: selected.price_numeric,
          image: selected.img,
          quantity,
        }),
      });

      if (!res.ok) throw new Error("Failed to add");

      setMessage("✅ Added to Cart Successfully!");
      loadCartCount();
      setTimeout(() => setMessage(""), 2000);
      setSelected(null);
    } catch {
      setMessage("❌ Something went wrong");
      setTimeout(() => setMessage(""), 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gradient-to-b from-emerald-50 to-white min-h-screen px-6 py-12">
      {/* TOP MESSAGE */}
      {message && (
        <div className="fixed top-5 right-5 bg-black text-white px-6 py-3 rounded-xl shadow-lg z-50">
          {message}
        </div>
      )}

      <div className="max-w-7xl mx-auto mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold">Smart Agriculture Marketplace</h1>

        {session && (
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow">
            <ShoppingCart size={18} />
            Cart ({cartCount})
          </div>
        )}
      </div>

      {/* PRODUCTS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.sub}</p>

              <div className="mt-2 font-bold text-emerald-600">{p.price}</div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    setSelected(p);
                    setQuantity(1);
                  }}
                  className="flex-1 border py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  Quick View
                </button>

                <button
                  onClick={() => router.push(`/products/${p.id}`)}
                  className="flex-1 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* QUICK VIEW MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-3xl max-w-4xl w-full p-8 relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4"
              >
                <X />
              </button>

              <img
                src={selected.img}
                alt={selected.title}
                className="w-full h-64 object-cover rounded-xl"
              />

              <h2 className="text-2xl font-bold mt-4">{selected.title}</h2>

              <p className="text-gray-600">{selected.sub}</p>

              <div className="text-xl font-bold text-emerald-600 mt-2">
                {selected.price}
              </div>

              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="border p-1 rounded"
                >
                  <Minus size={14} />
                </button>
                {quantity}
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="border p-1 rounded"
                >
                  <Plus size={14} />
                </button>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleAddToCart}
                  disabled={loading}
                  className="flex-1 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
                >
                  {loading ? "Adding..." : "Add to Cart"}
                </button>

                <button
                  onClick={() => router.push(`/products/${selected.id}`)}
                  className="flex-1 border py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  Buy Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
