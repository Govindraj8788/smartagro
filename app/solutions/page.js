// app/solutions/page.jsx
// Smooth, animated, modern "Solutions" page for SmartAgri
// Uses TailwindCSS + Framer Motion (make sure framer-motion is installed)
// npm i framer-motion

"use client";

import { motion } from "framer-motion";
import { CheckCircle, Cpu, Leaf, Satellite, Tractor, Wifi, Zap } from "lucide-react";

const solutions = [
  {
    id: 1,
    icon: <Leaf className="w-10 h-10 text-emerald-600" />, 
    title: "Smart Crop Monitoring",
    desc: "AI-powered insights for crop growth, stress detection, pests and nutrient needs.",
    features: ["NDVI analysis", "Disease detection", "Growth prediction"],
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    icon: <Satellite className="w-10 h-10 text-blue-600" />, 
    title: "IoT Sensor Automation",
    desc: "Real-time field sensors for soil, weather, irrigation & fertigation automation.",
    features: ["Soil moisture", "Weather station", "Fertigation control"],
    image:
      "https://images.unsplash.com/photo-1582719478250-1b9a8271b5b1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    icon: <Tractor className="w-10 h-10 text-orange-600" />, 
    title: "Autonomous Farming",
    desc: "Drones & robotics for spraying, sowing, mapping and precision field operations.",
    features: ["Drone spraying", "Autonomous tractor", "RTK mapping"],
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    icon: <Wifi className="w-10 h-10 text-purple-600" />, 
    title: "Connectivity & Gateways",
    desc: "LoRaWAN, 4G/5G, Mesh networking to connect farm devices at scale.",
    features: ["LoRaWAN gateway", "Edge processing", "Farm-wide connectivity"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    icon: <Cpu className="w-10 h-10 text-indigo-600" />, 
    title: "AI Analytics Platform",
    desc: "Dashboard for yield prediction, resource optimization and smart alerts.",
    features: ["Yield forecast", "Water usage AI", "Smart alerts"],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    icon: <Zap className="w-10 h-10 text-yellow-500" />, 
    title: "Energy-Smart Farm Systems",
    desc: "Solar-powered automation, battery-optimized pumps and intelligent switching.",
    features: ["Solar pumps", "Load balancing", "Energy savings"],
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 pt-24 pb-16 px-6 lg:px-12 overflow-hidden">
      {/* HERO SECTION */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-emerald-700 drop-shadow-sm"
        >
          Smart Farming Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 mt-6 text-lg md:text-xl"
        >
          IoT • AI • Automation • Robotics — Transforming traditional farms into
          intelligent, data-driven ecosystems.
        </motion.p>
      </section>

      {/* SOLUTION CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {solutions.map((sol, index) => (
          <motion.div
            key={sol.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition group border"
          >
            {/* IMAGE */}
            <div className="overflow-hidden h-52">
              <img
                src={sol.image}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <div className="mb-3">{sol.icon}</div>

              <h3 className="text-xl font-bold text-gray-800">{sol.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{sol.desc}</p>

              <div className="mt-4 space-y-2">
                {sol.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600" /> {f}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mt-24 bg-emerald-600 text-white rounded-3xl p-10 text-center shadow-xl"
      >
        <h2 className="text-3xl font-bold">Upgrade Your Farm Into a Smart Farm</h2>
        <p className="text-white/80 mt-3 text-lg">
          Get real-time data, automation and AI insights customized for your crops.
        </p>
        <button className="mt-6 px-8 py-3 bg-white text-emerald-700 font-semibold rounded-full shadow hover:shadow-md transition">
          Get Started
        </button>
      </motion.div>
    </main>
  );
}
