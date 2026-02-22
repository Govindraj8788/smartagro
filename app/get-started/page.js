"use client";

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Leaf,
  Brain,
  Database,
  LineChart,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    icon: Leaf,
    title: "Enter Farm & Crop Details",
    desc: "Provide location, crop type, growth stage, soil type and irrigation method.",
  },
  {
    icon: Brain,
    title: "AI Analyzes Your Data",
    desc: "Our AI processes real-time conditions and crop science knowledge.",
  },
  {
    icon: Database,
    title: "Structured Smart Advisory",
    desc: "Get irrigation schedule, disease control, organic & chemical treatment suggestions.",
  },
  {
    icon: LineChart,
    title: "Track & Improve",
    desc: "Monitor history, improve yield and make data-driven decisions.",
  },
];

export default function GetStartedPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleContinue = () => {
    if (!session) {
      router.push("/api/auth/signin");
    } else {
      router.push("/smart-irrigation/get-started");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-100 px-6 py-20">

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
          <Sparkles size={16} />
          AI Powered Smart Farming
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Transform Your Farm with
          <span className="text-emerald-600"> Intelligent Crop Advisory</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          SMARTAGRO analyzes your farm data using AI and delivers
          personalized irrigation plans, disease management strategies,
          and stage-based crop recommendations.
        </p>
      </motion.div>

      {/* AI FLOW STEPS */}
      <div className="mt-20 max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Icon size={26} />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-800">
                {step.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>

              <div className="absolute top-4 right-4 text-emerald-100 text-6xl font-bold opacity-20">
                {i + 1}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20 text-center"
      >
        <button
          onClick={handleContinue}
          className="group inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-10 py-4 text-white text-lg font-semibold shadow-xl hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
        >
          Start AI Crop Analysis
          <ArrowRight
            size={20}
            className="group-hover:translate-x-1 transition"
          />
        </button>

        <p className="mt-4 text-sm text-gray-500">
          Takes less than 2 minutes • Instant AI-powered results
        </p>
      </motion.div>

    </main>
  );
}