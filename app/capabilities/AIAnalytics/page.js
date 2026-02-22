"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Target, 
  Shield, 
  CloudSun,
  BarChart3,
  TrendingUp,
  Download,
  ArrowRight,
  Leaf,
  Thermometer
} from "lucide-react";
import Link from "next/link";

export default function AiAnalyticsPage() {
  const analyticsModules = [
    {
      title: "Crop Prediction",
      description: "Machine learning models predicting optimal crops based on soil & climate data",
      icon: <Target className="h-8 w-8" />,
      link: "/capabilities/AIAnalytics/crop-prediction",
      color: "from-green-500 to-teal-400",
      metrics: "95% Accuracy"
    },
    {
      title: "Disease Detection",
      description: "Computer vision identifying plant diseases early from images",
      icon: <Shield className="h-8 w-8" />,
      link: "/capabilities/AIAnalytics/disease-detection",
      color: "from-red-500 to-orange-400",
      metrics: "Early Detection"
    },
    {
      title: "Weather Forecast",
      description: "AI-powered hyperlocal weather predictions for farming decisions",
      icon: <CloudSun className="h-8 w-8" />,
      link: "/capabilities/AIAnalytics/weather-forecast",
      color: "from-sky-500 to-blue-400",
      metrics: "7-Day Forecast"
    },
    {
      title: "Yield Analysis",
      description: "Predict harvest yield with satellite imagery and drone data",
      icon: <BarChart3 className="h-8 w-8" />,
      link: "/capabilities/AIAnalytics/yield-analysis",
      color: "from-purple-500 to-pink-400",
      metrics: "±5% Precision"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link 
          href="/capabilities"
          className="inline-flex items-center text-green-600 hover:text-green-800 mb-4"
        >
          ← Back to All Capabilities
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">AI Analytics</h1>
            <p className="text-gray-600 mt-2">Advanced machine learning for smarter farming decisions</p>
          </div>
          <Link 
            href="/capabilities/iotsensors"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
          >
            IoT Sensors
            <Thermometer className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8 mb-12"
      >
        <div className="flex items-center">
          <div className="p-4 bg-white/20 rounded-2xl mr-6">
            <Brain className="h-12 w-12" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Transform Data into Decisions</h2>
            <p className="text-green-100">AI models trained on millions of data points provide actionable insights</p>
          </div>
        </div>
      </motion.div>

      {/* Analytics Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {analyticsModules.map((module, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={module.link}>
              <div className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${module.color} mr-4`}>
                    <div className="text-white">{module.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{module.title}</h3>
                    <span className="text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                      {module.metrics}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{module.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold group-hover:underline">
                    Explore Model
                  </span>
                  <ArrowRight className="h-5 w-5 text-green-600" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Data Sources */}
      <div className="bg-gradient-to-br from-gray-900 to-green-900 text-white rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6">Integrated Data Sources</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300">50+</div>
            <div className="text-gray-300">Satellite Bands</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300">24/7</div>
            <div className="text-gray-300">Drone Imaging</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300">1000+</div>
            <div className="text-gray-300">Soil Samples</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300">AI</div>
            <div className="text-gray-300">Models Trained</div>
          </div>
        </div>
      </div>

      {/* Connected Systems */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Connected Systems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            href="/capabilities/automation"
            className="group bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
          >
            <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700">Automation Integration</h4>
            <p className="text-gray-600 mb-4">Connect AI insights with automated farming systems</p>
            <div className="text-blue-600 font-semibold group-hover:underline">
              View Automation →
            </div>
          </Link>
          
          <Link 
            href="/capabilities/iotsensors"
            className="group bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
          >
            <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700">IoT Sensor Data</h4>
            <p className="text-gray-600 mb-4">Real-time data feeding AI models</p>
            <div className="text-purple-600 font-semibold group-hover:underline">
              View Sensors →
            </div>
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Get Started?</h3>
            <p className="text-gray-600">Download our AI Analytics whitepaper or schedule a demo</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="/docs/sample.pdf"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-black transition-colors"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Whitepaper
            </a>
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-lg transition-shadow">
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}