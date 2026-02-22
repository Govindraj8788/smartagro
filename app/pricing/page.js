"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    monthly: 0,
    yearly: 0,
    description: "Perfect for small farmers & beginners",
    features: [
      "Weather insights",
      "Basic crop tips",
      "Community access",
    ],
  },
  {
    name: "Pro",
    monthly: 999,
    yearly: 9999,
    popular: true,
    description: "Best for growing & commercial farms",
    features: [
      "Live weather alerts",
      "Crop health monitoring",
      "Irrigation reminders",
      "Analytics dashboard",
    ],
  },
  {
    name: "Enterprise",
    monthly: 2499,
    yearly: 24999,
    description: "For agri-business & large farms",
    features: [
      "IoT sensor integration",
      "AI yield prediction",
      "Dedicated support",
      "Custom reports",
    ],
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState("monthly");

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-extrabold text-emerald-700">
            Simple & Transparent Pricing
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Choose a plan that fits your farm size and growth goals 🌾
          </p>

          {/* TOGGLE */}
          <div className="mt-8 inline-flex items-center bg-white rounded-full shadow p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                billing === "monthly"
                  ? "bg-emerald-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                billing === "yearly"
                  ? "bg-emerald-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </motion.div>

        {/* PRICING CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition ${
                plan.popular ? "border-2 border-emerald-500 scale-[1.03]" : ""
              }`}
            >
              {/* POPULAR BADGE */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold bg-emerald-600 text-white rounded-full shadow">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-gray-800">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {plan.description}
              </p>

              <div className="mt-6">
                <span className="text-4xl font-extrabold text-emerald-700">
                  ₹{billing === "monthly" ? plan.monthly : plan.yearly}
                </span>
                <span className="text-gray-500 text-sm">
                  /{billing === "monthly" ? "month" : "year"}
                </span>
              </div>

              {/* FEATURES */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-emerald-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/get-started"
                className={`mt-8 block text-center px-6 py-3 rounded-full font-semibold transition ${
                  plan.popular
                    ? "bg-gradient-to-r from-emerald-500 to-lime-400 text-white shadow-lg hover:shadow-xl"
                    : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center text-sm text-gray-600"
        >
          Need a custom plan?{" "}
          <Link href="/contact" className="text-emerald-600 font-medium">
            Contact us →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
