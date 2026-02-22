"use client";

import { motion } from "framer-motion";
import { 
  Droplets, 
  Thermometer, 
  Activity,
  Download,
  ArrowLeft,
  AlertCircle,
  Brain,
  BarChart3,
  Gauge,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function SoilMoisturePage() {
  const sensorTypes = [
    { 
      type: "Capacitance Sensors", 
      principle: "Measure dielectric constant", 
      accuracy: "±3%", 
      depth: "0-100cm" 
    },
    { 
      type: "TDR Sensors", 
      principle: "Time Domain Reflectometry", 
      accuracy: "±2%", 
      depth: "0-200cm" 
    },
    { 
      type: "FDR Sensors", 
      principle: "Frequency Domain Reflectometry", 
      accuracy: "±2.5%", 
      depth: "0-150cm" 
    },
    { 
      type: "Tensiometers", 
      principle: "Soil water tension", 
      accuracy: "±5%", 
      depth: "15-100cm" 
    },
  ];

  const installationSteps = [
    "Choose optimal sensor placement locations",
    "Prepare soil access holes at required depths",
    "Install sensors at multiple depth levels",
    "Connect to data logger or wireless transmitter",
    "Calibrate sensors for specific soil type",
    "Configure data transmission intervals"
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
            <h1 className="text-4xl font-bold text-gray-900">Soil Moisture Sensors</h1>
            <p className="text-gray-600 mt-2">Precision measurement of soil water content for irrigation management</p>
          </div>
          <Link 
            href="/capabilities/automation/smart-irrigation"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
          >
            Smart Irrigation
            <Droplets className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl mr-4">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Sensor Technology</h2>
                <p className="text-gray-600">Different technologies for soil moisture measurement</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <span className="font-bold text-green-700">{sensor.accuracy}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Depth Range:</span>
                      <span className="font-semibold">{sensor.depth}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl mb-8">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-900/70" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <h3 className="text-2xl font-bold mb-2">Multi-depth Installation</h3>
              <p>Measure soil moisture at different root zone depths</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Installation Steps</h3>
            <div className="space-y-3">
              {installationSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link 
                href="/capabilities/automation/smart-irrigation"
                className="flex items-center p-3 bg-blue-700/30 rounded-lg hover:bg-blue-700/50"
              >
                <Droplets className="h-5 w-5 mr-3" />
                Configure Irrigation
              </Link>
              <a 
                href="/docs/sample.pdf"
                className="flex items-center p-3 bg-blue-700/30 rounded-lg hover:bg-blue-700/50"
              >
                <Download className="h-5 w-5 mr-3" />
                Download Spec Sheet
              </a>
              <Link 
                href="/capabilities/AIAnalytics/crop-prediction"
                className="flex items-center p-3 bg-blue-700/30 rounded-lg hover:bg-blue-700/50"
              >
                <Brain className="h-5 w-5 mr-3" />
                AI Water Optimization
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Related Sensors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/capabilities/iotsensors/soil-ph"
            className="group bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-purple-700">Soil pH Sensors</h4>
            <p className="text-gray-600 mb-4">Monitor soil acidity for optimal nutrient uptake</p>
            <div className="text-purple-600 font-semibold">View Details →</div>
          </Link>
          
          <Link 
            href="/capabilities/iotsensors/weather"
            className="group bg-gradient-to-r from-sky-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-sky-700">Weather Stations</h4>
            <p className="text-gray-600 mb-4">Monitor rainfall and evaporation rates</p>
            <div className="text-sky-600 font-semibold">View Details →</div>
          </Link>
          
          <Link 
            href="/capabilities/iotsensors/crop-health"
            className="group bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-green-700">Crop Health Sensors</h4>
            <p className="text-gray-600 mb-4">Monitor plant water stress responses</p>
            <div className="text-green-600 font-semibold">View Details →</div>
          </Link>
        </div>
      </div>
    </div>
  );
}