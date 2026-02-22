// app/products/[id]/page.js
// server component — DO NOT put "use client" here
import React from "react";
import PRODUCTS from "../../lib/products";
import ProductDetailClient from "../../components/ProductDetailClient";

export default function ProductPage({ params }) {
  const { id } = params;
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Product not found</h1>
        <p className="text-gray-600 mb-4">We could not find a product with id: <strong>{id}</strong></p>

        <div className="mb-4">
          <h4 className="font-semibold">Available product ids</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {PRODUCTS.map(p => (
              <a key={p.id} href={`/products/${p.id}`} className="px-3 py-1 border rounded text-sm bg-white">{p.id}</a>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-500">टीप: वरची id क्लिक करून पहा — जर ती चालली तर URL/Link मध्ये mismatch आहे.</p>
      </main>
    );
  }

  return <ProductDetailClient product={product} />;
}
