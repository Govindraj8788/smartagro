"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Video,
  Leaf,
  CloudRain,
  Cpu,
} from "lucide-react";

const resources = [
  {
    title: "Smart Farming Guides",
    description: "Step-by-step guides to modern farming techniques.",
    icon: BookOpen,
    href: "#",
    color: "from-emerald-500 to-lime-400",
  },
  {
    title: "Research Papers",
    description: "Latest agriculture research & case studies.",
    icon: FileText,
    href: "#",
    color: "from-sky-500 to-blue-500",
  },
  {
    title: "Video Tutorials",
    description: "Watch & learn smart agriculture visually.",
    icon: Video,
    href: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Crop Knowledge Base",
    description: "Crop-specific insights & best practices.",
    icon: Leaf,
    href: "#",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Weather Intelligence",
    description: "Climate data & weather-based planning.",
    icon: CloudRain,
    href: "#",
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "IoT & Sensors",
    description: "Learn how sensors improve productivity.",
    icon: Cpu,
    href: "#",
    color: "from-orange-500 to-amber-500",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white px-6 py-14">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-extrabold text-emerald-700">
            Resources
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Everything you need to learn, plan, and grow smarter with
            technology-driven agriculture 🌾
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <Link href={item.href}>
                  <div className="group h-full bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition cursor-pointer">
                    
                    {/* ICON */}
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${item.color} text-white mb-5 group-hover:scale-110 transition`}
                    >
                      <Icon size={28} />
                    </div>

                    {/* CONTENT */}
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-emerald-700 transition">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {item.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-5 text-sm font-medium text-emerald-600 group-hover:translate-x-1 transition">
                      Explore →
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Want personalized farming insights?
          </h2>
          <p className="text-gray-600 mt-2">
            Sign in to get recommendations based on your crops & location.
          </p>

          <Link
            href="/get-started"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 text-white font-semibold shadow-lg hover:shadow-xl transition"
          >
            Get Started 🌱
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
