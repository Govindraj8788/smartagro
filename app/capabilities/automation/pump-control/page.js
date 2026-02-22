"use client";

import { motion } from "framer-motion";
import { 
  Gauge, 
  Power, 
  Settings, 
  Download,
  ArrowLeft,
  AlertCircle,
  CheckCircle,
  Brain,
  Droplets,
  Battery
} from "lucide-react";
import Link from "next/link";

export default function PumpControlPage() {
  const pumpStatus = [
    { pump: "Main Irrigation Pump", status: "active", flow: "450 L/min", pressure: "3.2 bar", power: "85%" },
    { pump: "Drip Line Pump A", status: "active", flow: "120 L/min", pressure: "2.8 bar", power: "72%" },
    { pump: "Reservoir Pump", status: "idle", flow: "0 L/min", pressure: "0 bar", power: "15%" },
    { pump: "Backup Pump", status: "standby", flow: "0 L/min", pressure: "0 bar", power: "5%" },
  ];

  const systemMetrics = [
    { metric: "Total Flow Rate", value: "570 L/min", status: "optimal" },
    { metric: "System Pressure", value: "3.0 bar", status: "optimal" },
    { metric: "Energy Consumption", value: "4.2 kW", status: "efficient" },
    { metric: "Water Usage Today", value: "48,500 L", status: "normal" },
  ];

  const aiOptimizations = [
    "Reduce main pump speed by 15% during peak energy hours",
    "Schedule reservoir pump activation at 2:00 AM",
    "Increase drip line pressure for optimal distribution",
    "Standby backup pump ready for automatic failover",
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
            <h1 className="text-4xl font-bold text-gray-900">Pump Control System</h1>
            <p className="text-gray-600 mt-2">Automated water management with smart pumping</p>
          </div>
          <Link 
            href="/capabilities/iotsensors/water-level"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
          >
            Water Level Sensors
            <Droplets className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl mr-4">
                <Gauge className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Pump Status Dashboard</h2>
                <p className="text-gray-600">Real-time monitoring and control of all pumping systems</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pumpStatus.map((pump, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-xl border ${
                    pump.status === 'active' 
                      ? 'bg-green-50 border-green-200'
                      : pump.status === 'idle'
                      ? 'bg-gray-50 border-gray-200'
                      : 'bg-blue-50 border-blue-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-xl">{pump.pump}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <Gauge className="h-4 w-4 mr-2" />
                        {pump.flow} • {pump.pressure}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      pump.status === 'active' 
                        ? 'bg-green-100 text-green-800'
                        : pump.status === 'idle'
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {pump.status.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Power Usage</span>
                      <span>{pump.power}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          parseInt(pump.power) > 70 ? 'bg-green-500' :
                          parseInt(pump.power) > 30 ? 'bg-yellow-500' : 'bg-gray-400'
                        }`}
                        style={{ width: pump.power }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className={`px-4 py-2 rounded-lg font-semibold flex-1 ${
                      pump.status === 'active'
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}>
                      {pump.status === 'active' ? 'Stop' : 'Start'}
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-semibold">
                      Settings
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">System Metrics</h3>
            <div className="grid grid-cols-2 gap-6">
              {systemMetrics.map((metric, index) => (
                <div key={index} className={`p-6 rounded-xl border ${
                  metric.status === 'optimal' 
                    ? 'bg-green-50 border-green-200'
                    : metric.status === 'efficient'
                    ? 'bg-blue-50 border-blue-200'
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                    <div className="font-semibold text-gray-700">{metric.metric}</div>
                    <div className="text-sm text-gray-600 mt-1">{metric.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Control Panel</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center mb-2">
                  <Power className="h-5 w-5 text-blue-600 mr-2" />
                  <span>System Status</span>
                </div>
                <div className="text-xl font-bold text-blue-700">Operational</div>
                <div className="text-sm text-gray-600">All systems normal</div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-xl">
                <div className="flex items-center mb-2">
                  <Battery className="h-5 w-5 text-green-600 mr-2" />
                  <span>Energy Efficiency</span>
                </div>
                <div className="text-xl font-bold text-green-700">92%</div>
                <div className="text-sm text-gray-600">Optimized consumption</div>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-xl">
                <div className="flex items-center mb-2">
                  <Settings className="h-5 w-5 text-purple-600 mr-2" />
                  <span>Automation Level</span>
                </div>
                <div className="text-xl font-bold text-purple-700">Full</div>
                <div className="text-sm text-gray-600">AI-controlled</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-4">AI Optimizations</h3>
            <div className="space-y-3">
              {aiOptimizations.map((optimization, index) => (
                <div key={index} className="flex items-start p-3 bg-blue-700/30 rounded-lg">
                  <Brain className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{optimization}</span>
                </div>
              ))}
              <Link 
                href="/capabilities/AIAnalytics/weather-forecast"
                className="flex items-center justify-center mt-4 p-3 bg-blue-600 rounded-lg hover:bg-blue-700 font-semibold"
              >
                <Brain className="mr-2 h-5 w-5" />
                Optimize for Weather
              </Link>
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
                Configure Irrigation
              </Link>
              <button className="flex items-center w-full p-3 bg-green-50 rounded-lg hover:bg-green-100">
                <Settings className="h-5 w-5 text-green-600 mr-3" />
                Adjust Pump Settings
              </button>
              <a 
                href="/docs/sample.pdf"
                className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100"
              >
                <Download className="h-5 w-5 text-purple-600 mr-3" />
                Download System Report
              </a>
            </div>
          </div>

          <div className="relative h-48 rounded-2xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="font-semibold">Pump Control Center</p>
              <p className="text-sm text-blue-200">4 pumps • 570 L/min total flow</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">System Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">35%</div>
            <div className="font-semibold">Energy Savings</div>
            <div className="text-sm text-gray-600">Vs traditional pumps</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-blue-700 mb-2">99.8%</div>
            <div className="font-semibold">Uptime</div>
            <div className="text-sm text-gray-600">System reliability</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-purple-700 mb-2">40%</div>
            <div className="font-semibold">Water Savings</div>
            <div className="text-sm text-gray-600">Precision control</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-orange-700 mb-2">24/7</div>
            <div className="font-semibold">Monitoring</div>
            <div className="text-sm text-gray-600">Automated alerts</div>
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Connected Systems</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/capabilities/iotsensors/water-level"
            className="group bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-blue-700">Water Level Sensors</h4>
            <p className="text-gray-600 mb-4">Monitor reservoir and tank levels</p>
            <div className="text-blue-600 font-semibold">View Dashboard →</div>
          </Link>
          
          <Link 
            href="/capabilities/automation/smart-irrigation"
            className="group bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-green-700">Smart Irrigation</h4>
            <p className="text-gray-600 mb-4">Automated watering system control</p>
            <div className="text-green-600 font-semibold">Configure →</div>
          </Link>
          
          <Link 
            href="/capabilities/AIAnalytics/weather-forecast"
            className="group bg-gradient-to-r from-sky-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-sky-700">Weather Forecast</h4>
            <p className="text-gray-600 mb-4">Optimize pumping based on weather</p>
            <div className="text-sky-600 font-semibold">Check Forecast →</div>
          </Link>
        </div>
      </div>
    </div>
  );
}