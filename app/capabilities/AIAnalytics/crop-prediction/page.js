"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  TrendingUp, 
  Download, 
  BarChart3, 
  Leaf,
  ArrowLeft,
  CheckCircle,
  Brain,
  Sprout,
  Calendar
} from "lucide-react";
import Link from "next/link";

export default function CropPredictionPage() {
  const cropRecommendations = [
    { crop: "Rice", suitability: "95%", season: "Kharif", yield: "5.2 tons/ha", profit: "$1,850/ha" },
    { crop: "Wheat", suitability: "88%", season: "Rabi", yield: "4.8 tons/ha", profit: "$1,620/ha" },
    { crop: "Cotton", suitability: "92%", season: "Kharif", yield: "2.1 tons/ha", profit: "$2,150/ha" },
    { crop: "Soybean", suitability: "85%", season: "Kharif", yield: "2.8 tons/ha", profit: "$1,480/ha" },
  ];

  const predictionFactors = [
    { factor: "Soil Quality", impact: "High", value: "Excellent" },
    { factor: "Rainfall Forecast", impact: "High", value: "Adequate" },
    { factor: "Temperature Range", impact: "Medium", value: "Optimal" },
    { factor: "Market Price", impact: "High", value: "Rising" },
    { factor: "Pest Risk", impact: "Low", value: "Minimal" },
    { factor: "Labor Cost", impact: "Medium", value: "Moderate" },
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
            <h1 className="text-4xl font-bold text-gray-900">Crop Prediction AI</h1>
            <p className="text-gray-600 mt-2">Machine learning models for optimal crop selection</p>
          </div>
          <Link 
            href="/capabilities/AIAnalytics/disease-detection"
            className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold"
          >
            Disease Detection →
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-green-500 to-teal-400 rounded-xl mr-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">AI Recommendations</h2>
                <p className="text-gray-600">Based on soil data, weather forecast, and market analysis</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {cropRecommendations.map((crop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors group"
                >
                  <div className="flex items-center">
                    <div className="p-3 bg-white rounded-lg shadow mr-4 group-hover:shadow-md">
                      <Leaf className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{crop.crop}</h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        {crop.season} Season
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-700">{crop.suitability}</div>
                    <div className="text-gray-600">Suitability Score</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{crop.yield}</div>
                    <div className="text-sm text-gray-600">Expected Yield</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-700">{crop.profit}</div>
                    <div className="text-sm text-gray-600">Projected Profit</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Prediction Factors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {predictionFactors.map((factor, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{factor.factor}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      factor.impact === 'High' 
                        ? 'bg-red-100 text-red-800'
                        : factor.impact === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {factor.impact}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-gray-900">{factor.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Model Performance</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-700">95%</div>
                <div className="text-gray-600">Prediction Accuracy</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-700">40%</div>
                <div className="text-gray-600">Yield Increase Potential</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-700">12M+</div>
                <div className="text-gray-600">Data Points Analyzed</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-green-900 text-white rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link 
                href="/capabilities/iotsensors/soil-moisture"
                className="flex items-center p-3 bg-green-700/30 rounded-lg hover:bg-green-700/50"
              >
                <BarChart3 className="h-5 w-5 mr-3" />
                Update Soil Data
              </Link>
              <Link 
                href="/capabilities/AIAnalytics/weather-forecast"
                className="flex items-center p-3 bg-green-700/30 rounded-lg hover:bg-green-700/50"
              >
                <Brain className="h-5 w-5 mr-3" />
                Check Weather Forecast
              </Link>
              <a 
                href="/docs/sample.pdf"
                className="flex items-center p-3 bg-green-700/30 rounded-lg hover:bg-green-700/50"
              >
                <Download className="h-5 w-5 mr-3" />
                Download Full Report
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Planting Schedule</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Sprout className="h-5 w-5 text-green-600 mr-2" />
                  <span>Planting Window</span>
                </div>
                <span className="font-semibold">Mar 15 - Apr 10</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Harvest Date</span>
                </div>
                <span className="font-semibold">Aug 20 - Sep 15</span>
              </div>
              <div className="h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-teal-900/70" />
        <div className="absolute inset-0 p-8 flex flex-col justify-center text-white">
          <h3 className="text-2xl font-bold mb-4">AI Model Training</h3>
          <p className="text-green-200">Trained on 5 years of historical data from 500+ farms</p>
          <div className="mt-6 flex space-x-4">
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm">Soil Data Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">94%</div>
              <div className="text-sm">Weather Prediction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">89%</div>
              <div className="text-sm">Market Trend Accuracy</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Related Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/capabilities/AIAnalytics/disease-detection"
            className="group bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-red-700">Disease Detection</h4>
            <p className="text-gray-600 mb-4">Early disease identification using AI</p>
            <div className="text-red-600 font-semibold">Explore →</div>
          </Link>
          
          <Link 
            href="/capabilities/AIAnalytics/yield-analysis"
            className="group bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-purple-700">Yield Analysis</h4>
            <p className="text-gray-600 mb-4">Predict harvest yields with satellite data</p>
            <div className="text-purple-600 font-semibold">Analyze →</div>
          </Link>
          
          <Link 
            href="/capabilities/automation/fertilizer"
            className="group bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-blue-700">Auto-Fertilization</h4>
            <p className="text-gray-600 mb-4">Schedule fertilization based on predictions</p>
            <div className="text-blue-600 font-semibold">Configure →</div>
          </Link>
        </div>
      </div>
    </div>
  );
}