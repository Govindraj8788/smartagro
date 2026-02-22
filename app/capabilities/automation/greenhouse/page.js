"use client";

import { motion } from "framer-motion";
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Sun,
  Settings,
  Download,
  ArrowLeft,
  AlertCircle,
  CheckCircle,
  Brain,
  Sprout,
  Calendar
} from "lucide-react";
import Link from "next/link";

export default function GreenhousePage() {
  const greenhouseControls = [
    { parameter: "Temperature", current: "24°C", target: "25°C", status: "optimal", unit: "Celsius" },
    { parameter: "Humidity", current: "65%", target: "70%", status: "slightly_low", unit: "Percentage" },
    { parameter: "CO2 Levels", current: "420 ppm", target: "450 ppm", status: "low", unit: "PPM" },
    { parameter: "Light Intensity", current: "8500 lux", target: "9000 lux", status: "optimal", unit: "Lux" },
    { parameter: "Soil Moisture", current: "72%", target: "75%", status: "optimal", unit: "Percentage" },
    { parameter: "Ventilation", current: "Level 3", target: "Level 3", status: "optimal", unit: "Speed" },
  ];

  const cropStatus = [
    { crop: "Tomatoes", stage: "Flowering", health: "Excellent", days: "42" },
    { crop: "Lettuce", stage: "Harvest Ready", health: "Good", days: "28" },
    { crop: "Bell Peppers", stage: "Fruit Set", health: "Excellent", days: "56" },
    { crop: "Cucumbers", stage: "Vegetative", health: "Good", days: "35" },
  ];

  const aiAdjustments = [
    "Increase humidity by 5% for optimal tomato growth",
    "Adjust light schedule for lettuce nearing harvest",
    "Maintain current CO2 levels for pepper development",
    "Schedule nutrient feed for cucumbers in 2 hours",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link 
          href="/capabilities/automation"
          className="inline-flex items-center text-green-600 hover:text-green-800 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Automation
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Greenhouse Automation</h1>
            <p className="text-gray-600 mt-2">Climate-controlled environment for optimal growth</p>
          </div>
          <Link 
            href="/capabilities/AIAnalytics/weather-forecast"
            className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold"
          >
            Weather Forecast
            <Thermometer className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl mr-4">
                <Sprout className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Environmental Controls</h2>
                <p className="text-gray-600">Real-time monitoring and automated adjustments</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {greenhouseControls.map((control, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-xl border ${
                    control.status === 'optimal' 
                      ? 'bg-green-50 border-green-200'
                      : control.status === 'slightly_low'
                      ? 'bg-yellow-50 border-yellow-200'
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {control.parameter === "Temperature" && <Thermometer className="h-5 w-5 text-red-500 mr-2" />}
                      {control.parameter === "Humidity" && <Droplets className="h-5 w-5 text-blue-500 mr-2" />}
                      {control.parameter === "CO2 Levels" && <Wind className="h-5 w-5 text-gray-500 mr-2" />}
                      {control.parameter === "Light Intensity" && <Sun className="h-5 w-5 text-yellow-500 mr-2" />}
                      {control.parameter === "Soil Moisture" && <Droplets className="h-5 w-5 text-cyan-500 mr-2" />}
                      {control.parameter === "Ventilation" && <Wind className="h-5 w-5 text-purple-500 mr-2" />}
                      <h3 className="font-bold text-lg">{control.parameter}</h3>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      control.status === 'optimal' 
                        ? 'bg-green-100 text-green-800'
                        : control.status === 'slightly_low'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {control.status.replace('_', ' ')}
                    </span>
                  </div>
                  <div className="text-center mb-2">
                    <div className={`text-3xl font-bold ${
                      control.status === 'optimal' 
                        ? 'text-green-700'
                        : control.status === 'slightly_low'
                        ? 'text-yellow-700'
                        : 'text-red-700'
                    }`}>
                      {control.current}
                    </div>
                    <div className="text-gray-600">Current Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-700">Target: {control.target}</div>
                    <div className="text-sm text-gray-500">{control.unit}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-emerald-900/70" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <h3 className="text-2xl font-bold mb-2">Smart Greenhouse View</h3>
              <p>Automated climate control for year-round production</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Crop Status</h3>
            <div className="space-y-4">
              {cropStatus.map((crop, index) => (
                <div key={index} className="p-4 bg-green-50 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold">{crop.crop}</h4>
                      <p className="text-sm text-gray-600">{crop.stage}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      crop.health === 'Excellent' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {crop.health}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Day {crop.days} of growth cycle
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-green-900 text-white rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-4">AI Adjustments</h3>
            <div className="space-y-3">
              {aiAdjustments.map((adjustment, index) => (
                <div key={index} className="flex items-start p-3 bg-green-700/30 rounded-lg">
                  <Brain className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{adjustment}</span>
                </div>
              ))}
              <button className="flex items-center justify-center w-full mt-4 p-3 bg-green-600 rounded-lg hover:bg-green-700 font-semibold">
                <Settings className="mr-2 h-5 w-5" />
                Apply All Adjustments
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">System Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span>Climate Control</span>
                </div>
                <span className="font-semibold text-green-700">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span>Irrigation System</span>
                </div>
                <span className="font-semibold text-green-700">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                  <span>CO2 Generator</span>
                </div>
                <span className="font-semibold text-yellow-700">Maintenance</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link 
                href="/capabilities/automation/smart-irrigation"
                className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100"
              >
                <Droplets className="h-5 w-5 text-blue-600 mr-3" />
                Adjust Irrigation
              </Link>
              <a 
                href="/docs/sample.pdf"
                className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100"
              >
                <Download className="h-5 w-5 text-green-600 mr-3" />
                Download Report
              </a>
              <Link 
                href="/capabilities/iotsensors/weather"
                className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100"
              >
                <Thermometer className="h-5 w-5 text-purple-600 mr-3" />
                Check External Weather
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Greenhouse Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl font-bold text-green-700 mb-2">365</div>
            <div className="font-semibold">Growing Days</div>
            <div className="text-sm text-gray-600">Year-round production</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl font-bold text-blue-700 mb-2">90%</div>
            <div className="font-semibold">Water Savings</div>
            <div className="text-sm text-gray-600">Closed-loop system</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl font-bold text-purple-700 mb-2">40%</div>
            <div className="font-semibold">Yield Increase</div>
            <div className="text-sm text-gray-600">Optimal conditions</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl font-bold text-orange-700 mb-2">95%</div>
            <div className="font-semibold">Disease Reduction</div>
            <div className="text-sm text-gray-600">Controlled environment</div>
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Connected Systems</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/capabilities/automation/smart-irrigation"
            className="group bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-blue-700">Smart Irrigation</h4>
            <p className="text-gray-600 mb-4">Automated watering system integration</p>
            <div className="text-blue-600 font-semibold">Configure →</div>
          </Link>
          
          <Link 
            href="/capabilities/iotsensors/weather"
            className="group bg-gradient-to-r from-sky-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-sky-700">Weather Monitoring</h4>
            <p className="text-gray-600 mb-4">External climate data integration</p>
            <div className="text-sky-600 font-semibold">View Dashboard →</div>
          </Link>
          
          <Link 
            href="/capabilities/AIAnalytics/crop-prediction"
            className="group bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-green-700">Crop Prediction</h4>
            <p className="text-gray-600 mb-4">Optimize crop selection for greenhouse</p>
            <div className="text-green-600 font-semibold">Analyze →</div>
          </Link>
        </div>
      </div>
    </div>
  );
}