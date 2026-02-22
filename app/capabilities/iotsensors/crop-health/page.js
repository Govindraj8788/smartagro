"use client";

import { motion } from "framer-motion";
import { 
  Eye, 
  Camera, 
  Thermometer,
  CloudRain,
  Download,
  ArrowLeft,
  Brain,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function CropHealthPage() {
  const sensorTechnologies = [
    {
      type: "NDVI Sensors",
      measurement: "Vegetation Index",
      range: "0-1",
      use: "Crop Health Assessment"
    },
    {
      type: "Multispectral Cameras",
      measurement: "5-12 Bands",
      range: "Visible to Infrared",
      use: "Detailed Analysis"
    },
    {
      type: "Thermal Cameras",
      measurement: "Canopy Temperature",
      range: "-20°C to 150°C",
      use: "Stress Detection"
    },
    {
      type: "Hyperspectral Sensors",
      measurement: "100+ Bands",
      range: "Full Spectrum",
      use: "Nutrient Analysis"
    },
  ];

  const ndviValues = [
    { value: "0.0-0.2", status: "Bare Soil", color: "bg-red-500", action: "Check planting" },
    { value: "0.2-0.4", status: "Weak Vegetation", color: "bg-orange-500", action: "Monitor growth" },
    { value: "0.4-0.6", status: "Moderate Health", color: "bg-yellow-500", action: "Normal care" },
    { value: "0.6-0.8", status: "Healthy Vegetation", color: "bg-green-500", action: "Optimal" },
    { value: "0.8-1.0", status: "Very Healthy", color: "bg-emerald-500", action: "Excellent" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/capabilities/iot-sensors"
          className="inline-flex items-center text-green-600 hover:text-green-800 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to IoT Sensors
        </Link>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Crop Health Sensors
            </h1>
            <p className="text-gray-600 mt-2">
              Multispectral and thermal imaging for plant health assessment
            </p>
          </div>

          <Link
            href="/capabilities/AIAnalytics/disease-detection"
            className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold"
          >
            Disease Detection AI
            <Brain className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          {/* Sensor Technologies */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl mr-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Sensor Technologies
                </h2>
                <p className="text-gray-600">
                  Advanced imaging for crop health monitoring
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {sensorTechnologies.map((sensor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <h3 className="font-bold text-lg mb-2">{sensor.type}</h3>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Measurement:</span>
                      <span className="font-semibold">{sensor.measurement}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Range:</span>
                      <span className="font-semibold">{sensor.range}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Primary Use:</span>
                      <span className="font-bold text-green-700">
                        {sensor.use}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Deployment Methods</h3>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <Zap className="h-5 w-5 text-blue-600 mb-1" />
                Ground-based Sensors
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <Camera className="h-5 w-5 text-green-600 mb-1" />
                Drone-mounted Sensors
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <Thermometer className="h-5 w-5 text-purple-600 mb-1" />
                Tractor-mounted Sensors
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-green-900 text-white rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>

            <Link
              href="/capabilities/iot-sensors/soil-moisture"
              className="flex items-center p-3 bg-green-700/30 rounded-lg"
            >
              <CloudRain className="h-5 w-5 mr-3" />
              Check Soil Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
