"use client";

import { motion } from "framer-motion";
import { 
  Beaker, 
  Settings, 
  Calendar,
  Download,
  ArrowLeft,
  AlertCircle,
  CheckCircle,
  Brain,
  Droplets,
  Package
} from "lucide-react";
import Link from "next/link";

export default function FertilizerPage() {
  const fertilizerSchedules = [
    { field: "North Wheat", type: "Nitrogen", amount: "120 kg/ha", date: "Tomorrow 10:00 AM", status: "scheduled" },
    { field: "East Corn", type: "NPK Blend", amount: "85 kg/ha", date: "Today 2:00 PM", status: "active" },
    { field: "South Soybean", type: "Potassium", amount: "65 kg/ha", date: "Mar 15", status: "pending" },
    { field: "West Vegetables", type: "Organic Compost", amount: "2 tons/ha", date: "Mar 20", status: "planned" },
  ];

  const nutrientLevels = [
    { nutrient: "Nitrogen", level: "45 ppm", status: "low", optimal: "60-80 ppm" },
    { nutrient: "Phosphorus", level: "25 ppm", status: "optimal", optimal: "20-30 ppm" },
    { nutrient: "Potassium", level: "38 ppm", status: "optimal", optimal: "35-50 ppm" },
    { nutrient: "Calcium", level: "120 ppm", status: "high", optimal: "100-120 ppm" },
  ];

  const aiRecommendations = [
    "Increase nitrogen application in North Wheat by 15%",
    "Delay phosphorus application in East Corn until next week",
    "Organic compost application optimal for West Vegetables",
    "Monitor magnesium levels in South Soybean",
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
            <h1 className="text-4xl font-bold text-gray-900">Automated Fertilization</h1>
            <p className="text-gray-600 mt-2">Precision nutrient management with AI optimization</p>
          </div>
          <Link 
            href="/capabilities/iotsensors/soil-ph"
            className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold"
          >
            Soil pH Sensors
            <Beaker className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl mr-4">
                <Beaker className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Fertilization Schedule</h2>
                <p className="text-gray-600">AI-optimized nutrient application plan</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {fertilizerSchedules.map((schedule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-xl border ${
                    schedule.status === 'active' 
                      ? 'bg-green-50 border-green-200' 
                      : schedule.status === 'scheduled'
                      ? 'bg-blue-50 border-blue-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-xl">{schedule.field}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <Package className="h-4 w-4 mr-2" />
                        {schedule.type} • {schedule.amount}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-lg">{schedule.date}</div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        schedule.status === 'active' 
                          ? 'bg-green-100 text-green-800'
                          : schedule.status === 'scheduled'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {schedule.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold">
                        {schedule.status === 'active' ? 'Pause' : 'Start'}
                      </button>
                      <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-semibold">
                        Reschedule
                      </button>
                    </div>
                    <Link 
                      href="/capabilities/AIAnalytics/disease-detection"
                      className="text-purple-600 hover:text-purple-800 font-semibold"
                    >
                      Check Plant Health →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Soil Nutrient Levels</h3>
            <div className="grid grid-cols-2 gap-6">
              {nutrientLevels.map((nutrient, index) => (
                <div key={index} className={`p-6 rounded-xl border ${
                  nutrient.status === 'optimal' 
                    ? 'bg-green-50 border-green-200'
                    : nutrient.status === 'low'
                    ? 'bg-red-50 border-red-200'
                    : 'bg-yellow-50 border-yellow-200'
                }`}>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg">{nutrient.nutrient}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      nutrient.status === 'optimal' 
                        ? 'bg-green-100 text-green-800'
                        : nutrient.status === 'low'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {nutrient.status}
                    </span>
                  </div>
                  <div className="text-center mb-2">
                    <div className={`text-3xl font-bold ${
                      nutrient.status === 'optimal' 
                        ? 'text-green-700'
                        : nutrient.status === 'low'
                        ? 'text-red-700'
                        : 'text-yellow-700'
                    }`}>
                      {nutrient.level}
                    </div>
                    <div className="text-gray-600">Current Level</div>
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    Optimal: {nutrient.optimal}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">System Status</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-xl">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span>Fertilizer Dispenser</span>
                </div>
                <div className="text-xl font-bold text-green-700">Online</div>
                <div className="text-sm text-gray-600">Tank Level: 85%</div>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center mb-2">
                  <Settings className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Application Accuracy</span>
                </div>
                <div className="text-xl font-bold text-blue-700">98.5%</div>
                <div className="text-sm text-gray-600">Precision rate</div>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-xl">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                  <span>Next Maintenance</span>
                </div>
                <div className="text-xl font-bold text-purple-700">Mar 25</div>
                <div className="text-sm text-gray-600">Scheduled in 14 days</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900 text-white rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-4">AI Recommendations</h3>
            <div className="space-y-3">
              {aiRecommendations.map((rec, index) => (
                <div key={index} className="flex items-start p-3 bg-purple-700/30 rounded-lg">
                  <Brain className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{rec}</span>
                </div>
              ))}
              <Link 
                href="/capabilities/AIAnalytics/yield-analysis"
                className="flex items-center justify-center mt-4 p-3 bg-purple-600 rounded-lg hover:bg-purple-700 font-semibold"
              >
                <Brain className="mr-2 h-5 w-5" />
                Optimize for Yield
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link 
                href="/capabilities/iotsensors/soil-ph"
                className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100"
              >
                <Beaker className="h-5 w-5 text-purple-600 mr-3" />
                Check Soil pH Levels
              </Link>
              <button className="flex items-center w-full p-3 bg-green-50 rounded-lg hover:bg-green-100">
                <Settings className="h-5 w-5 text-green-600 mr-3" />
                Adjust Application Rate
              </button>
              <a 
                href="/docs/sample.pdf"
                className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100"
              >
                <Download className="h-5 w-5 text-blue-600 mr-3" />
                Download Schedule
              </a>
            </div>
          </div>

          <div className="relative h-48 rounded-2xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589923186741-b7d59d6b2c4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="font-semibold">Precision Fertilization</p>
              <p className="text-sm text-purple-200">Reduces waste by 40%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Environmental Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">40%</div>
            <div className="font-semibold">Fertilizer Savings</div>
            <div className="text-sm text-gray-600">Reduced chemical usage</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-blue-700 mb-2">65%</div>
            <div className="font-semibold">Runoff Reduction</div>
            <div className="text-sm text-gray-600">Less water contamination</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-purple-700 mb-2">25%</div>
            <div className="font-semibold">Yield Increase</div>
            <div className="text-sm text-gray-600">Optimal nutrient delivery</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-orange-700 mb-2">95%</div>
            <div className="font-semibold">Application Accuracy</div>
            <div className="text-sm text-gray-600">Precision targeting</div>
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Connected Systems</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/capabilities/iotsensors/soil-ph"
            className="group bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-purple-700">Soil pH Sensors</h4>
            <p className="text-gray-600 mb-4">Monitor soil conditions in real-time</p>
            <div className="text-purple-600 font-semibold">View Dashboard →</div>
          </Link>
          
          <Link 
            href="/capabilities/AIAnalytics/disease-detection"
            className="group bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-red-700">Disease Detection</h4>
            <p className="text-gray-600 mb-4">Prevent nutrient-related diseases</p>
            <div className="text-red-600 font-semibold">Monitor →</div>
          </Link>
          
          <Link 
            href="/capabilities/automation/smart-irrigation"
            className="group bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-blue-700">Smart Irrigation</h4>
            <p className="text-gray-600 mb-4">Coordinate with watering schedules</p>
            <div className="text-blue-600 font-semibold">Configure →</div>
          </Link>
        </div>
      </div>
    </div>
  );
}