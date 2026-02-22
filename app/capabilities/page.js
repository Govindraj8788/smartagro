"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Cpu, 
  Zap, 
  BarChart3,
  CloudRain,
  Thermometer,
  Leaf,
  Droplets,
  Gauge,
  Wind,
  Activity,
  Waves,
  Target,
  Shield,
  Beaker,
  Sprout,
  Settings,
  ArrowRight,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default function CapabilitiesPage() {
  const capabilities = [
    {
      title: "AI Analytics",
      description: "Predict crops, detect diseases, forecast weather, analyze yields",
      icon: <Brain className="h-8 w-8" />,
      link: "/capabilities/AIAnalytics",
      color: "from-green-500 to-emerald-600",
      features: [
        { name: "Crop Prediction", link: "/capabilities/AIAnalytics/crop-prediction" },
        { name: "Disease Detection", link: "/capabilities/AIAnalytics/disease-detection" },
        { name: "Weather Forecast", link: "/capabilities/AIAnalytics/weather-forecast" },
        { name: "Yield Analysis", link: "/capabilities/AIAnalytics/yield-analysis" }
      ]
    },
    {
      title: "Automation",
      description: "Smart control of irrigation, fertilization, pumps, and greenhouse",
      icon: <Cpu className="h-8 w-8" />,
      link: "/capabilities/automation",
      color: "from-blue-500 to-cyan-600",
      features: [
        { name: "Fertilizer Control", link: "/capabilities/automation/fertilizer" },
        { name: "Greenhouse Automation", link: "/capabilities/automation/greenhouse" },
        { name: "Pump Control", link: "/capabilities/automation/pump-control" },
        { name: "Smart Irrigation", link: "/capabilities/automation/smart-irrigation" }
      ]
    },
    {
      title: "IoT Sensors",
      description: "Real-time monitoring of soil, crop, water, and weather conditions",
      icon: <Zap className="h-8 w-8" />,
      link: "/capabilities/iotsensors",
      color: "from-purple-500 to-pink-600",
      features: [
        { name: "Crop Health", link: "/capabilities/iotsensors/crop-health" },
        { name: "Soil Moisture", link: "/capabilities/iotsensors/soil-moisture" },
        { name: "Soil pH", link: "/capabilities/iotsensors/soil-ph" },
        { name: "Water Level", link: "/capabilities/iotsensors/water-level" },
        { name: "Weather", link: "/capabilities/iotsensors/weather" }
      ]
    }
  ];

  const stats = [
    { value: "40%", label: "Water Savings", icon: <Droplets className="h-6 w-6" /> },
    { value: "95%", label: "Prediction Accuracy", icon: <Target className="h-6 w-6" /> },
    { value: "25%", label: "Yield Increase", icon: <TrendingUp className="h-6 w-6" /> },
    { value: "60%", label: "Labor Reduction", icon: <Settings className="h-6 w-6" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Farm<span className="text-green-600">X</span> Capabilities
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Transform your farming with AI-powered analytics, smart automation, 
          and real-time IoT monitoring for maximum efficiency and yield.
        </p>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl mb-4">
              <div className="text-green-600">{stat.icon}</div>
            </div>
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Main Capabilities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {capabilities.map((capability, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Link href={capability.link}>
              <div className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`inline-flex items-center justify-center p-4 bg-gradient-to-r ${capability.color} rounded-2xl mb-6`}>
                  <div className="text-white">{capability.icon}</div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700">
                  {capability.title}
                </h2>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                
                <div className="space-y-3 mb-6">
                  {capability.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 hover:text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <Link href={feature.link} className="hover:underline">
                        {feature.name}
                      </Link>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-green-600 font-semibold group-hover:underline">
                  Explore {capability.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How FarmX Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-lg mb-4">
              <Zap className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Monitor</h3>
            <p className="text-gray-600">IoT sensors collect real-time data from fields</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-lg mb-4">
              <Brain className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Analyze</h3>
            <p className="text-gray-600">AI processes data to generate insights</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-lg mb-4">
              <Cpu className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Automate</h3>
            <p className="text-gray-600">Systems adjust based on AI recommendations</p>
          </div>
        </div>
      </div>

      {/* Integration Showcase */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Seamless Integration</h2>
        <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586771107445-d3ca888129fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-900/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h3 className="text-2xl font-bold mb-4">Connected Ecosystem</h3>
              <p className="text-green-100">IoT sensors feed data to AI, which controls automation systems</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-gray-900 to-green-900 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Farm?</h3>
          <p className="text-green-100 mb-6">Join thousands of farmers using FarmX to optimize their operations</p>
          <div className="space-y-4">
            <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors">
              Schedule a Demo
            </button>
            <button className="w-full py-3 bg-transparent border-2 border-green-500 text-green-300 hover:bg-green-500/20 font-semibold rounded-xl transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Resources</h3>
          <div className="space-y-4">
            <a 
              href="/docs/sample.pdf" 
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-green-50 group"
            >
              <div className="flex items-center">
                <BarChart3 className="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <h4 className="font-semibold">FarmX Capabilities Guide</h4>
                  <p className="text-sm text-gray-500">PDF • 5.2 MB</p>
                </div>
              </div>
              <div className="text-green-600 font-semibold group-hover:underline">
                Download
              </div>
            </a>
            
            <Link 
              href="/capabilities/iotsensors" 
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 group"
            >
              <div className="flex items-center">
                <Thermometer className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-semibold">IoT Sensors Setup</h4>
                  <p className="text-sm text-gray-500">Installation guide</p>
                </div>
              </div>
              <div className="text-blue-600 font-semibold group-hover:underline">
                View →
              </div>
            </Link>
            
            <Link 
              href="/capabilities/AIAnalytics" 
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-purple-50 group"
            >
              <div className="flex items-center">
                <Brain className="h-6 w-6 text-purple-600 mr-4" />
                <div>
                  <h4 className="font-semibold">AI Analytics Dashboard</h4>
                  <p className="text-sm text-gray-500">Live demo access</p>
                </div>
              </div>
              <div className="text-purple-600 font-semibold group-hover:underline">
                Explore →
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}