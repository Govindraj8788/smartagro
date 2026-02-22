"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Leaf, Sparkles } from "lucide-react";

export default function GetStarted() {
  const [form, setForm] = useState({
    farmerName: "",
    location: "",
    farmSize: "",
    cropName: "",
    soilType: "",
    cropStage: "",
    irrigationMethod: "",
    symptoms: "",
    farmingPreference: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/crop-advisory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setResult(data.aiResponse);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-100 py-16 px-6">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full text-emerald-700 text-sm font-medium">
          <Sparkles size={16} />
          AI Powered Crop Intelligence
        </div>

        <h1 className="text-4xl font-bold mt-6 text-gray-900">
          Smart Crop Advisory Form
        </h1>

        <p className="text-gray-600 mt-4">
          Fill in your farm details and receive AI-powered irrigation, disease
          control and yield optimization advice.
        </p>
      </motion.div>

      {/* FORM */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto mt-12 bg-white p-10 rounded-3xl shadow-2xl space-y-6"
      >
        {/* Farmer Info */}
        <SectionTitle icon={<Leaf size={18} />} title="Farmer Information" />

        <Input
          name="farmerName"
          placeholder="Farmer Name"
          onChange={handleChange}
          required
        />
        <Input
          name="location"
          placeholder="Farm Location (District/State)"
          onChange={handleChange}
          required
        />
        <Input
          name="farmSize"
          placeholder="Farm Size (in acres)"
          onChange={handleChange}
        />

        {/* Crop Details */}
        <SectionTitle title="Crop Details" />

        <Select name="cropName" onChange={handleChange}>
          <option value="">Select Crop</option>
          <option>Wheat</option>
          <option>Rice</option>
          <option>Cotton</option>
          <option>Soybean</option>
          <option>Tomato</option>
          <option>Other</option>
        </Select>

        <Input
          name="cropName"
          placeholder="If Other, specify crop name"
          onChange={handleChange}
        />

        <Select name="cropStage" onChange={handleChange}>
          <option value="">Select Crop Stage</option>
          <option>Seedling</option>
          <option>Vegetative</option>
          <option>Flowering</option>
          <option>Fruiting</option>
          <option>Harvesting</option>
        </Select>

        {/* Soil & Irrigation */}
        <SectionTitle title="Soil & Irrigation" />

        <Select name="soilType" onChange={handleChange}>
          <option value="">Select Soil Type</option>
          <option>Black Soil</option>
          <option>Red Soil</option>
          <option>Clay Soil</option>
          <option>Sandy Soil</option>
          <option>Loamy Soil</option>
          <option>Other</option>
        </Select>

        <Select name="irrigationMethod" onChange={handleChange}>
          <option value="">Irrigation Method</option>
          <option>Drip Irrigation</option>
          <option>Sprinkler</option>
          <option>Flood Irrigation</option>
          <option>Manual Watering</option>
        </Select>

        {/* Symptoms */}
        <SectionTitle title="Crop Symptoms (If Any)" />

        <textarea
          name="symptoms"
          placeholder="Describe leaf color, spots, pest attack, wilting etc..."
          onChange={handleChange}
          className="input h-28"
        />

        {/* Preference */}
        <Select name="farmingPreference" onChange={handleChange}>
          <option value="">Farming Preference</option>
          <option>Organic Only</option>
          <option>Chemical Only</option>
          <option>Mixed Approach</option>
        </Select>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-2xl bg-emerald-600 text-white font-bold text-lg hover:bg-emerald-700 transition flex justify-center items-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Analyzing Farm Data...
            </>
          ) : (
            "Generate AI Advisory Report"
          )}
        </button>
      </motion.form>

      {/* ERROR */}
      {error && (
        <div className="max-w-4xl mx-auto mt-6 bg-red-100 text-red-700 p-4 rounded-xl">
          ❌ {error}
        </div>
      )}

      {/* AI RESULT */}
      {result && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto mt-10 bg-white p-10 rounded-3xl shadow-xl"
        >
          <h2 className="text-2xl font-bold text-emerald-700 mb-6">
            🌿 AI Crop Advisory Report
          </h2>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            {result.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </motion.div>
      )}

      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #d1d5db;
          transition: 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: #059669;
          box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.2);
        }
      `}</style>
    </main>
  );
}

function Input({ ...props }) {
  return <input {...props} className="input" />;
}

function Select({ children, ...props }) {
  return (
    <select {...props} className="input">
      {children}
    </select>
  );
}

function SectionTitle({ title, icon }) {
  return (
    <div className="flex items-center gap-2 text-lg font-semibold text-emerald-700 pt-4">
      {icon}
      {title}
    </div>
  );
}
