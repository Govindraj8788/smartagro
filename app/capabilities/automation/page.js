"use client";

import { motion } from "framer-motion";
import { 
  Cpu, 
  Beaker, 
  Sprout, 
  Gauge,
  Droplets,
  Settings,
  Download,
  ArrowRight,
  Zap,
  Brain
} from "lucide-react";
import Link from "next/link";

export default function AutomationPage() {
  const automationSystems = [
    {
      title: "Fertilizer Control",
      description: "Precision nutrient delivery based on soil analysis",
      icon: <Beaker className="h-8 w-8" />,
      link: "/capabilities/automation/fertilizer",
      color: "from-purple-500 to-pink-400",
      metrics: "40% Less Waste"
    },
    {
      title: "Greenhouse Automation",
      description: "Climate-controlled environment for optimal growth",
      icon: <Sprout className="h-8 w-8" />,
      link: "/capabilities/automation/greenhouse",
      color: "from-green-500 to-emerald-400",
      metrics: "Year-round Production"
    },
    {
      title: "Pump Control",
      description: "Smart water management and distribution systems",
      icon: <Gauge className="h-8 w-8" />,
      link: "/capabilities/automation/pump-control",
      color: "from-blue-500 to-cyan-400",
      metrics: "35% Energy Savings"
    },
    {
      title: "Smart Irrigation",
      description: "AI-optimized watering based on soil moisture",
      icon: <Droplets className="h-8 w-8" />,
      link: "/capabilities/automation/smart-irrigation",
      color: "from-sky-500 to-indigo-400",
      metrics: "40% Water Savings"
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
            <h1 className="text-4xl font-bold text-gray-900">Automation</h1>
            <p className="text-gray-600 mt-2">Smart control systems for efficient farming operations</p>
          </div>
          <Link 
            href="/capabilities/AIAnalytics"
            className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold"
          >
            AI Analytics
            <Brain className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-2xl p-8 mb-12"
      >
        <div className="flex items-center">
          <div className="p-4 bg-white/20 rounded-2xl mr-6">
            <Cpu className="h-12 w-12" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Automate Your Farming Operations</h2>
            <p className="text-blue-100">Reduce labor costs and increase efficiency with smart automation</p>
          </div>
        </div>
      </motion.div>

      {/* Automation Systems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {automationSystems.map((system, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={system.link}>
              <div className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${system.color} mr-4`}>
                    <div className="text-white">{system.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{system.title}</h3>
                    <span className="text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                      {system.metrics}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{system.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold group-hover:underline">
                    Configure System
                  </span>
                  <ArrowRight className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Benefits */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Automation Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">60%</div>
            <div className="font-semibold">Labor Reduction</div>
            <div className="text-sm text-gray-600">Automated operations</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-blue-700 mb-2">95%</div>
            <div className="font-semibold">Accuracy</div>
            <div className="text-sm text-gray-600">Precision application</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-purple-700 mb-2">24/7</div>
            <div className="font-semibold">Operation</div>
            <div className="text-sm text-gray-600">Continuous monitoring</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-orange-700 mb-2">40%</div>
            <div className="font-semibold">Cost Savings</div>
            <div className="text-sm text-gray-600">Reduced waste</div>
          </div>
        </div>
      </div>

      {/* Connected Systems */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Connected Systems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            href="/capabilities/iotsensors"
            className="group bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
          >
            <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700">IoT Sensors</h4>
            <p className="text-gray-600 mb-4">Real-time data for automated decision making</p>
            <div className="text-purple-600 font-semibold group-hover:underline">
              View Sensors →
            </div>
          </Link>
          
          <Link 
            href="/capabilities/AIAnalytics"
            className="group bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
          >
            <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700">AI Analytics</h4>
            <p className="text-gray-600 mb-4">Intelligent insights driving automation</p>
            <div className="text-green-600 font-semibold group-hover:underline">
              View Analytics →
            </div>
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Automating Today</h3>
            <p className="text-gray-600">Get our automation guide or schedule a consultation</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="/docs/sample.pdf"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-black transition-colors"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Guide
            </a>
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-shadow">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}