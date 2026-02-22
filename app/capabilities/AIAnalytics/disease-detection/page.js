"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  AlertTriangle, 
  Camera, 
  Download,
  ArrowLeft,
  CheckCircle,
  XCircle,
  Brain,
  Leaf,
  Activity
} from "lucide-react";
import Link from "next/link";

export default function DiseaseDetectionPage() {
  const detectedIssues = [
    { disease: "Leaf Rust", confidence: "94%", status: "alert", affected: "5% of field", treatment: "Fungicide" },
    { disease: "Powdery Mildew", confidence: "87%", status: "warning", affected: "2% of field", treatment: "Sulfur Spray" },
    { disease: "Bacterial Blight", confidence: "76%", status: "monitoring", affected: "1% of field", treatment: "Copper Solution" },
  ];

  const healthyCrops = [
    { crop: "Wheat Field A", status: "healthy", lastScan: "2 hours ago", plants: "12,500" },
    { crop: "Corn Field B", status: "healthy", lastScan: "4 hours ago", plants: "8,400" },
    { crop: "Soybean Field C", status: "healthy", lastScan: "1 hour ago", plants: "15,200" },
  ];

  const preventionTips = [
    "Maintain proper plant spacing for air circulation",
    "Water at soil level to keep foliage dry",
    "Rotate crops seasonally to break disease cycles",
    "Monitor soil pH and nutrient levels regularly",
    "Use disease-resistant crop varieties",
    "Remove and destroy infected plant material",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link 
          href="/capabilities/AIAnalytics/crop-prediction"
          className="inline-flex items-center text-green-600 hover:text-green-800 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Crop Prediction
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Disease Detection AI</h1>
            <p className="text-gray-600 mt-2">Computer vision for early plant disease identification</p>
          </div>
          <Link 
            href="/capabilities/iotsensors/crop-health"
            className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold"
          >
            IoT Crop Monitoring
            <Activity className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 mb-8"
      >
        <div className="flex items-center">
          <AlertTriangle className="h-8 w-8 text-red-600 mr-4" />
          <div>
            <h3 className="font-bold text-lg text-red-800">Active Disease Detected</h3>
            <p className="text-red-700">Leaf Rust detected in Sector 4B with 94% confidence</p>
          </div>
          <div className="ml-auto">
            <Link 
              href="/capabilities/automation/fertilizer"
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold"
            >
              Schedule Treatment
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-red-500 to-orange-400 rounded-xl mr-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">AI Detection Results</h2>
                <p className="text-gray-600">Analysis from drone imagery and ground sensors</p>
              </div>
            </div>

            <div className="space-y-6">
              {detectedIssues.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-xl border ${
                    issue.status === 'alert' 
                      ? 'bg-red-50 border-red-200' 
                      : issue.status === 'warning'
                      ? 'bg-orange-50 border-orange-200'
                      : 'bg-yellow-50 border-yellow-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-2xl text-gray-900">{issue.disease}</h3>
                      <p className="text-gray-600">Affected Area: {issue.affected}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${
                        issue.confidence > '90%' ? 'text-red-700' : 'text-orange-700'
                      }`}>
                        {issue.confidence}
                      </div>
                      <div className="text-gray-600">Confidence Score</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Leaf className="h-5 w-5 text-green-600 mr-2" />
                      <span className="font-semibold">Recommended: {issue.treatment}</span>
                    </div>
                    <div className="flex space-x-3">
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold">
                        View Treatment Plan
                      </button>
                      <Link 
                        href="/capabilities/automation/fertilizer"
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
                      >
                        Apply Treatment
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-emerald-900/70" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <h3 className="text-2xl font-bold mb-2">Multispectral Imaging</h3>
              <p>AI analysis of plant health using NDVI and thermal imaging</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Healthy Crop Areas</h3>
            <div className="space-y-4">
              {healthyCrops.map((crop, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <div className="font-semibold">{crop.crop}</div>
                      <div className="text-sm text-gray-600">{crop.plants} plants</div>
                    </div>
                  </div>
                  <div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                      Healthy
                    </span>
                    <div className="text-xs text-gray-500 mt-1">{crop.lastScan}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-red-900 text-white rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-4">AI Actions</h3>
            <div className="space-y-3">
              <button className="flex items-center w-full p-3 bg-red-700/30 rounded-lg hover:bg-red-700/50">
                <Camera className="h-5 w-5 mr-3" />
                Schedule Drone Scan
              </button>
              <Link 
                href="/capabilities/iotsensors/crop-health"
                className="flex items-center p-3 bg-red-700/30 rounded-lg hover:bg-red-700/50"
              >
                <Activity className="h-5 w-5 mr-3" />
                View Real-time Sensors
              </Link>
              <a 
                href="/docs/sample.pdf"
                className="flex items-center p-3 bg-red-700/30 rounded-lg hover:bg-red-700/50"
              >
                <Download className="h-5 w-5 mr-3" />
                Download Diagnosis Report
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Model Accuracy</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Disease Detection</span>
                <span className="font-bold text-green-700">96%</span>
              </div>
              <div className="flex justify-between">
                <span>False Positive Rate</span>
                <span className="font-bold text-red-700">2.3%</span>
              </div>
              <div className="flex justify-between">
                <span>Early Detection</span>
                <span className="font-bold text-blue-700">7 days</span>
              </div>
              <div className="h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Prevention Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preventionTips.map((tip, index) => (
            <div key={index} className="flex items-start bg-white p-4 rounded-xl shadow">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{tip}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Connected Systems</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/capabilities/iotsensors/crop-health"
            className="group bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-green-700">Crop Health Sensors</h4>
            <p className="text-gray-600 mb-4">Real-time monitoring of plant conditions</p>
            <div className="text-green-600 font-semibold">View Dashboard →</div>
          </Link>
          
          <Link 
            href="/capabilities/automation/fertilizer"
            className="group bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-red-700">Auto-Fertilization</h4>
            <p className="text-gray-600 mb-4">Automate treatment applications</p>
            <div className="text-red-600 font-semibold">Configure →</div>
          </Link>
          
          <Link 
            href="/capabilities/AIAnalytics/weather-forecast"
            className="group bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-blue-700">Weather Forecast</h4>
            <p className="text-gray-600 mb-4">Monitor conditions that affect disease spread</p>
            <div className="text-blue-600 font-semibold">Check Forecast →</div>
          </Link>
        </div>
      </div>
    </div>
  );
}