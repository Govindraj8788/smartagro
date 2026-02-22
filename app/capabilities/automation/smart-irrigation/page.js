"use client";

import { useState } from "react";

export default function SmartIrrigationPage() {
  const [moisture, setMoisture] = useState(40);
  const [irrigationOn, setIrrigationOn] = useState(false);

  // Auto irrigation logic
  const waterNeeded = moisture < 35;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300">

      {/* HERO SECTION */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 mb-6">
          🌿 Smart Irrigation System
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-green-800">
          Intelligent water management using real-time soil monitoring,
          automation, and AI-based weather predictions.
        </p>

        <div className="mt-10">
          <button className="bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition duration-300 shadow-xl">
            Explore Dashboard
          </button>
        </div>
      </section>

      {/* LIVE SOIL MONITOR */}
      <section className="bg-white/60 backdrop-blur-lg shadow-2xl rounded-3xl max-w-4xl mx-auto p-10 mb-20">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          🌱 Live Soil Moisture Monitor
        </h2>

        <div className="text-center">
          <p className="text-xl mb-4 font-semibold">
            Current Moisture: {moisture}%
          </p>

          <input
            type="range"
            min="0"
            max="100"
            value={moisture}
            onChange={(e) => setMoisture(e.target.value)}
            className="w-full accent-green-600"
          />

          <div className="mt-6 text-lg">
            {waterNeeded ? (
              <span className="text-red-600 font-bold">
                ⚠ Water Needed!
              </span>
            ) : (
              <span className="text-green-700 font-bold">
                ✅ Moisture Level Optimal
              </span>
            )}
          </div>
        </div>
      </section>

      {/* IRRIGATION CONTROL */}
      <section className="max-w-4xl mx-auto p-10 mb-20 bg-green-800 text-white rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          💧 Irrigation Control Panel
        </h2>

        <div className="flex flex-col items-center">
          <button
            onClick={() => setIrrigationOn(!irrigationOn)}
            className={`px-10 py-4 rounded-full text-lg font-bold transition duration-300 ${
              irrigationOn
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {irrigationOn ? "Turn OFF Irrigation" : "Turn ON Irrigation"}
          </button>

          <p className="mt-6 text-xl">
            Status:{" "}
            <span className="font-bold">
              {irrigationOn ? "🚿 ON" : "⛔ OFF"}
            </span>
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-16">
          🚀 Smart Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="bg-white shadow-2xl rounded-2xl p-8 hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">📡 IoT Sensors</h3>
            <p>Real-time soil & weather monitoring using advanced IoT devices.</p>
          </div>

          <div className="bg-white shadow-2xl rounded-2xl p-8 hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">🤖 AI Automation</h3>
            <p>Automatic irrigation based on smart algorithms.</p>
          </div>

          <div className="bg-white shadow-2xl rounded-2xl p-8 hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">📊 Live Dashboard</h3>
            <p>Track data, control water, and receive alerts in real-time.</p>
          </div>

        </div>
      </section>

    </div>
  );
}