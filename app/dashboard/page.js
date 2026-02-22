"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";
import { CloudRain, Droplets, Thermometer, Leaf } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading dashboard...
      </div>
    );
  }

  if (!session) {
    redirect("/api/auth/signin");
  }

  const waterUsage = [
    { day: "Mon", value: 40 },
    { day: "Tue", value: 55 },
    { day: "Wed", value: 48 },
    { day: "Thu", value: 60 },
    { day: "Fri", value: 52 },
    { day: "Sat", value: 70 },
    { day: "Sun", value: 65 },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white px-6 py-10">
      <div className="max-w-7xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-emerald-700">
            Welcome, {session.user.name} 🌱
          </h1>
          <p className="text-gray-600">Farm analytics & live monitoring</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Temperature",
              value: "29°C",
              icon: Thermometer,
              color: "bg-orange-100 text-orange-600",
            },
            {
              title: "Soil Moisture",
              value: "61%",
              icon: Droplets,
              color: "bg-sky-100 text-sky-600",
            },
            {
              title: "Rain Chance",
              value: "45%",
              icon: CloudRain,
              color: "bg-indigo-100 text-indigo-600",
            },
            {
              title: "Crop Health",
              value: "Healthy",
              icon: Leaf,
              color: "bg-emerald-100 text-emerald-600",
            },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.color} mb-4`}
                >
                  <Icon />
                </div>
                <p className="text-sm text-gray-500">{card.title}</p>
                <p className="text-2xl font-bold">{card.value}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-2xl shadow p-6"
          >
            <h2 className="text-lg font-semibold mb-4">
              💧 Weekly Water Usage
            </h2>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={waterUsage}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow p-6"
          >
            <h2 className="text-lg font-semibold mb-4">📈 Smart Insights</h2>

            <ul className="space-y-3 text-sm">
              <li>🌧 Rain expected — delay irrigation</li>
              <li>💧 Water usage +12% this week</li>
              <li>🌱 Crop health stable</li>
              <li>📊 Yield prediction improving</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
