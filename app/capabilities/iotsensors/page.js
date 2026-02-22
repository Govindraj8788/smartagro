"use client";

import { motion } from "framer-motion";
import {
  CloudRain,
  Thermometer,
  Wind,
  Sun,
  Download,
  ArrowLeft,
  Brain,
  Droplets,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

export default function WeatherPage() {
  const weatherSensors = [
    {
      sensor: "Temperature",
      unit: "°C",
      range: "-40°C to 85°C",
      accuracy: "±0.5°C",
      icon: <Thermometer className="h-6 w-6" />,
    },
    {
      sensor: "Humidity",
      unit: "% RH",
      range: "0–100%",
      accuracy: "±3%",
      icon: <Droplets className="h-6 w-6" />,
    },
    {
      sensor: "Rainfall",
      unit: "mm",
      range: "0–1000 mm/hr",
      accuracy: "±5%",
      icon: <CloudRain className="h-6 w-6" />,
    },
    {
      sensor: "Wind Speed",
      unit: "m/s",
      range: "0–75 m/s",
      accuracy: "±0.5 m/s",
      icon: <Wind className="h-6 w-6" />,
    },
    {
      sensor: "Solar Radiation",
      unit: "W/m²",
      range: "0–2000 W/m²",
      accuracy: "±5%",
      icon: <Sun className="h-6 w-6" />,
    },
    {
      sensor: "Barometric Pressure",
      unit: "hPa",
      range: "300–1100 hPa",
      accuracy: "±0.5 hPa",
      icon: <BarChart3 className="h-6 w-6" />,
    },
  ];

  const stationTypes = [
    {
      type: "Compact Weather Station",
      sensors: "4–6 Sensors",
      power: "Solar + Battery",
      cost: "Low–Medium",
    },
    {
      type: "Agricultural Grade Station",
      sensors: "8–12 Sensors",
      power: "Solar + Grid",
      cost: "Medium–High",
    },
    {
      type: "Research Grade Station",
      sensors: "12+ Sensors",
      power: "Grid + Backup",
      cost: "High",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* BACK */}
      <Link
        href="/capabilities/iot-sensors"
        className="inline-flex items-center text-green-600 hover:text-green-800 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to IoT Sensors
      </Link>

      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Weather Sensors</h1>
          <p className="text-gray-600 mt-2">
            Real-time weather monitoring for smart agriculture
          </p>
        </div>

        <Link
          href="/capabilities/AIAnalytics/weather-forecast"
          className="flex items-center text-sky-600 hover:text-sky-800 font-semibold"
        >
          Weather Forecast AI
          <Brain className="ml-2 h-5 w-5" />
        </Link>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2">
          {/* SENSOR SPECS */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">
              Weather Sensor Specifications
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {weatherSensors.map((sensor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3 text-blue-600">
                      {sensor.icon}
                    </div>
                    <h3 className="font-bold">{sensor.sensor}</h3>
                  </div>

                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Range</span>
                      <span className="font-semibold">{sensor.range}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Accuracy</span>
                      <span className="font-bold text-green-700">
                        {sensor.accuracy}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Unit</span>
                      <span className="font-semibold">{sensor.unit}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* STATION TYPES */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Weather Station Types</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stationTypes.map((station, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">{station.type}</h3>
                  <p>Sensors: {station.sensors}</p>
                  <p>Power: {station.power}</p>
                  <p className="font-semibold">Cost: {station.cost}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {/* LIVE WEATHER */}
          <div className="bg-gradient-to-br from-sky-500 to-indigo-600 text-white rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold">24°C</div>
              <div className="text-sky-200">Current Temperature</div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">65%</div>
                <div className="text-sm text-sky-200">Humidity</div>
              </div>
              <div>
                <div className="text-2xl font-bold">12 km/h</div>
                <div className="text-sm text-sky-200">Wind</div>
              </div>
              <div>
                <div className="text-2xl font-bold">2.4 mm</div>
                <div className="text-sm text-sky-200">Rainfall</div>
              </div>
              <div>
                <div className="text-2xl font-bold">850 W/m²</div>
                <div className="text-sm text-sky-200">Solar</div>
              </div>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-gray-900 text-white rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>

            <div className="space-y-3">
              <Link
                href="/capabilities/automation/smart-irrigation"
                className="flex items-center p-3 bg-sky-700/30 rounded-lg"
              >
                <Droplets className="h-5 w-5 mr-3" />
                Adjust Irrigation
              </Link>

              <a
                href="/docs/sample.pdf"
                className="flex items-center p-3 bg-sky-700/30 rounded-lg"
              >
                <Download className="h-5 w-5 mr-3" />
                Download Specs
              </a>

              <Link
                href="/capabilities/AIAnalytics/weather-forecast"
                className="flex items-center p-3 bg-sky-700/30 rounded-lg"
              >
                <Brain className="h-5 w-5 mr-3" />
                AI Forecast
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED */}
      <div className="border-t mt-12 pt-8">
        <h3 className="text-xl font-bold mb-6">Related Systems</h3>

        <Link
          href="/capabilities/iot-sensors/soil-moisture"
          className="block bg-cyan-50 rounded-2xl p-6"
        >
          Soil Moisture Monitoring →
        </Link>
      </div>
    </div>
  );
}
