"use client";

import { motion } from "framer-motion";
import { 
  Activity, 
  Beaker,
  Download,
  ArrowLeft,
  AlertCircle,
  Brain,
  BarChart3,
  Thermometer
} from "lucide-react";
import Link from "next/link";

export default function SoilPhPage() {
  const phRanges = [
    { range: "4.0-5.0", status: "Very Acidic", color: "bg-red-500", crops: "Blueberries, Potatoes" },
    { range: "5.1-6.0", status: "Acidic", color: "bg-orange-500", crops: "Corn, Tomatoes" },
    { range: "6.1-7.0", status: "Slightly Acidic", color: "bg-yellow-500", crops: "Most Vegetables" },
    { range: "7.1-7.5", status: "Neutral", color: "bg-green-500", crops: "Alfalfa, Clover" },
    { range: "7.6-8.0", status: "Alkaline", color: "bg-blue-500", crops: "Asparagus" },
    { range: "8.1-9.0", status: "Very Alkaline", color: "bg-purple-500", crops: "Specialty Crops" },
  ];

  const sensorTechnologies = [
    { 
      technology: "Glass Electrode", 
      accuracy: "±0.1 pH", 
      lifespan: "1-2 years", 
      cost: "Medium" 
    },
    { 
      technology: "ISFET Sensors", 
      accuracy: "±0.2 pH", 
      lifespan: "3-5 years", 
      cost: "High" 
    },
    { 
      technology: "Optical Sensors", 
      accuracy: "±0.3 pH", 
      lifespan: "2-3 years", 
      cost: "Medium" 
    },
    { 
      technology: "Antimony Electrode", 
      accuracy: "±0.2 pH", 
      lifespan: "6-12 months", 
      cost: "Low" 
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link 
          href="/capabilities/iotsensors"
          className="inline-flex items-center text-green-600 hover:text-green-800 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to IoT Sensors
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Soil pH Sensors</h1>
            <p className="text-gray-600 mt-2">Continuous monitoring of soil acidity for optimal nutrient management</p>
          </div>
          <Link 
            href="/capabilities/automation/fertilizer"
            className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold"
          >
            Auto-Fertilization
            <Beaker className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl mr-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Soil pH Ranges</h2>
                <p className="text-gray-600">Understanding pH levels for different crops</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {phRanges.map((range, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-4 bg-gray-50 rounded-xl"
                >
                  <div className={`w-24 h-12 ${range.color} rounded-lg flex items-center justify-center text-white font-bold mr-6`}>
                    {range.range}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold">{range.status}</h3>
                    <p className="text-sm text-gray-600">Optimal for: {range.crops}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">{range.range.includes('6.1-7.0') ? "Ideal Range" : "Adjust Required"}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589923186741-b7d59d6b2c4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-900/70" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <h3 className="text-2xl font-bold mb-2">Continuous pH Monitoring</h3>
              <p>Real-time tracking of soil acidity changes</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Sensor Technologies</h3>
            <div className="space-y-4">
              {sensorTechnologies.map((tech, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{tech.technology}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      tech.cost === 'High' ? 'bg-red-100 text-red-800' :
                      tech.cost === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {tech.cost}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-600">Accuracy:</span>
                      <span className="font-bold ml-2">{tech.accuracy}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Lifespan:</span>
                      <span className="font-bold ml-2">{tech.lifespan}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900 text-white rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link 
                href="/capabilities/automation/fertilizer"
                className="flex items-center p-3 bg-purple-700/30 rounded-lg hover:bg-purple-700/50"
              >
                <Beaker className="h-5 w-5 mr-3" />
                Adjust Fertilization
              </Link>
              <a 
                href="/docs/sample.pdf"
                className="flex items-center p-3 bg-purple-700/30 rounded-lg hover:bg-purple-700/50"
              >
                <Download className="h-5 w-5 mr-3" />
                Download pH Guide
              </a>
              <Link 
                href="/capabilities/iotsensors/soil-moisture"
                className="flex items-center p-3 bg-purple-700/30 rounded-lg hover:bg-purple-700/50"
              >
                <Activity className="h-5 w-5 mr-3" />
                Check Moisture Levels
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Related Systems</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/capabilities/iotsensors/soil-moisture"
            className="group bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-blue-700">Soil Moisture</h4>
            <p className="text-gray-600 mb-4">Monitor water content for optimal growth</p>
            <div className="text-blue-600 font-semibold">View Details →</div>
          </Link>
          
          <Link 
            href="/capabilities/automation/fertilizer"
            className="group bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-purple-700">Auto-Fertilization</h4>
            <p className="text-gray-600 mb-4">Automate pH correction treatments</p>
            <div className="text-purple-600 font-semibold">Configure →</div>
          </Link>
          
          <Link 
            href="/capabilities/AIAnalytics/crop-prediction"
            className="group bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-green-700">Crop Prediction</h4>
            <p className="text-gray-600 mb-4">Select crops based on soil pH</p>
            <div className="text-green-600 font-semibold">Analyze →</div>
          </Link>
        </div>
      </div>
    </div>
  );
}