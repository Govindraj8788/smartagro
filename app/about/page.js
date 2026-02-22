"use client";

import { motion } from "framer-motion";
import { Leaf, Cpu, CloudRain, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-700">
            About FarmaX
          </h1>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            FarmaX is a smart agriculture platform that empowers farmers with
            technology-driven insights to grow more, waste less, and farm
            sustainably 🌾
          </p>
        </motion.div>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          {[
            {
              title: "Our Mission",
              text: "To simplify farming using data, automation, and AI so every farmer can make smarter decisions with confidence.",
              icon: Leaf,
            },
            {
              title: "Our Vision",
              text: "A future where agriculture is sustainable, profitable, and resilient with the help of smart technology.",
              icon: CloudRain,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* WHY FARMAX */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose FarmaX?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Smart Insights",
                desc: "AI-powered analytics for better crop planning.",
                icon: Cpu,
              },
              {
                title: "Weather Intelligence",
                desc: "Accurate forecasts & alerts for timely action.",
                icon: CloudRain,
              },
              {
                title: "Farmer-First Design",
                desc: "Built simple, intuitive & field-friendly.",
                icon: Users,
              },
              {
                title: "Sustainable Growth",
                desc: "Reduce waste, save water & boost yield.",
                icon: Leaf,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-xl shadow p-6 text-center hover:shadow-xl transition"
                >
                  <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Join the future of farming 🌱
          </h2>
          <p className="text-gray-600 mt-3">
            Start your smart farming journey with FarmaX today.
          </p>

          <a
            href="/get-started"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 text-white font-semibold shadow-lg hover:shadow-xl transition"
          >
            Get Started
          </a>
        </motion.div>

      </div>
    </main>
  );
}

