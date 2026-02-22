"use client";

import { motion } from "framer-motion";
import { 
  Waves, 
  Gauge,
  Droplets,
  Download,
  ArrowLeft,
  BarChart3,
  Thermometer
} from "lucide-react";
import Link from "next/link";

export default function WaterLevelPage() {

  const sensorTypes = [
    {
      type: "Ultrasonic Sensors",
      principle: "Sound wave reflection",
      accuracy: "±1cm",
      installation: "Non-contact"
    },
    {
      type: "Pressure Transducers",
      principle: "Hydrostatic pressure",
      accuracy: "±0.5%",
      installation: "Submerged"
    },
    {
      type: "Float Switches",
      principle: "Mechanical float",
      accuracy: "±2cm",
      installation: "Surface mount"
    },
    {
      type: "Radar Sensors",
      principle: "Microwave reflection",
      accuracy: "±0.5cm",
      installation: "Non-contact"
    },
  ];

  const monitoringPoints = [
    { location: "Main Reservoir", current: "85%", capacity: "500,000 L", trend: "stable" },
    { location: "Irrigation Tank", current: "45%", capacity: "50,000 L", trend: "decreasing" },
    { location: "Rainwater Harvest", current: "92%", capacity: "20,000 L", trend: "increasing" },
    { location: "Well Supply", current: "68%", capacity: "150,000 L", trend: "stable" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">

      {/* HEADER */}
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
              Water Level Sensors
            </h1>
            <p className="text-gray-600 mt-2">
              Monitor reservoirs, tanks, and irrigation systems
            </p>
          </div>

          <Link
            href="/capabilities/automation/pump-control"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
          >
            Pump Control
            <Gauge className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

        <div className="lg:col-span-2">

          {/* SENSOR TYPES */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-xl mr-4">
                <Waves className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Sensor Technologies
                </h2>
                <p className="text-gray-600">
                  Different methods for water level measurement
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {sensorTypes.map((sensor, index) => (
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
                      <span className="text-gray-600">Principle:</span>
                      <span className="font-semibold">{sensor.principle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Accuracy:</span>
                      <span className="font-bold text-blue-700">{sensor.accuracy}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Installation:</span>
                      <span className="font-semibold">{sensor.installation}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">

          <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>

            <Link
              href="/capabilities/iot-sensors/weather"
              className="flex items-center p-3 bg-blue-700/30 rounded-lg hover:bg-blue-700/50"
            >
              <Thermometer className="h-5 w-5 mr-3" />
              Check Rain Forecast
            </Link>
          </div>
        </div>
      </div>

      {/* RELATED */}
      <div className="border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Related Systems
        </h3>

        <Link
          href="/capabilities/iot-sensors/soil-moisture"
          className="block bg-blue-50 rounded-2xl p-6"
        >
          Soil Moisture Monitoring →
        </Link>
      </div>

    </div>
  );
}
