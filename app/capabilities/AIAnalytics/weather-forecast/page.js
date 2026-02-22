"use client";

import { motion } from "framer-motion";
import { 
  CloudSun, 
  Thermometer, 
  Droplets, 
  Wind,
  Calendar,
  Download,
  ArrowLeft,
  TrendingUp,
  Brain,
  CloudRain,
  Sunrise,
  Sunset
} from "lucide-react";
import Link from "next/link";

export default function WeatherForecastPage() {
  const weeklyForecast = [
    { day: "Today", high: "26°C", low: "18°C", condition: "Partly Cloudy", rain: "20%", icon: "⛅" },
    { day: "Tomorrow", high: "24°C", low: "17°C", condition: "Light Rain", rain: "60%", icon: "🌦️" },
    { day: "Wed", high: "22°C", low: "16°C", condition: "Rain", rain: "85%", icon: "🌧️" },
    { day: "Thu", high: "23°C", low: "15°C", condition: "Cloudy", rain: "40%", icon: "☁️" },
    { day: "Fri", high: "25°C", low: "17°C", condition: "Sunny", rain: "10%", icon: "☀️" },
  ];

  const criticalAlerts = [
    { type: "Heavy Rain", time: "Wed 2PM - 6PM", impact: "High", action: "Delay irrigation" },
    { type: "Frost Warning", time: "Thu 4AM - 8AM", impact: "Critical", action: "Protect crops" },
    { type: "High Winds", time: "Tomorrow 1PM - 4PM", impact: "Medium", action: "Secure equipment" },
  ];

  const aiInsights = [
    "Optimal planting window opens Friday",
    "Rain on Wednesday reduces irrigation needs by 70%",
    "Temperature drop Thursday requires crop protection",
    "Wind conditions favorable for pesticide application tomorrow",
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
            <h1 className="text-4xl font-bold text-gray-900">AI Weather Forecast</h1>
            <p className="text-gray-600 mt-2">Hyperlocal predictions with agricultural insights</p>
          </div>
          <Link 
            href="/capabilities/iotsensors/weather"
            className="inline-flex items-center text-sky-600 hover:text-sky-800 font-semibold"
          >
            Live Weather Sensors
            <Thermometer className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">Current Conditions</h2>
                <p className="text-sky-200">Farm Location • AI-Enhanced Forecast</p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-bold">24°C</div>
                <div className="text-sky-200">Feels Like 26°C</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Droplets className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">65%</div>
                <div className="text-sky-200">Humidity</div>
              </div>
              <div className="text-center">
                <Wind className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">12 km/h</div>
                <div className="text-sky-200">Wind Speed</div>
              </div>
              <div className="text-center">
                <CloudRain className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">2.4 mm</div>
                <div className="text-sky-200">Rainfall</div>
              </div>
              <div className="text-center">
                <Brain className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">94%</div>
                <div className="text-sky-200">AI Confidence</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-sky-500 to-blue-400 rounded-xl mr-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">5-Day Forecast</h2>
                <p className="text-gray-600">AI-powered agricultural weather predictions</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {weeklyForecast.map((day, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-sky-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-20 text-center">
                      <div className="text-3xl mb-1">{day.icon}</div>
                      <div className="font-bold">{day.day}</div>
                    </div>
                    <div className="ml-6">
                      <div className="font-semibold text-lg">{day.condition}</div>
                      <div className="flex items-center text-gray-600">
                        <CloudRain className="h-4 w-4 mr-1" />
                        {day.rain} chance of rain
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline">
                      <div className="text-3xl font-bold text-gray-900">{day.high}</div>
                      <div className="ml-2 text-gray-500">/{day.low}</div>
                    </div>
                    <div className="text-gray-600">High/Low</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1599008633840-052c7f756385?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-900/70 to-indigo-900/70" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <h3 className="text-2xl font-bold mb-2">Satellite Weather Analysis</h3>
              <p>AI processing of satellite imagery for hyperlocal forecasts</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Critical Alerts</h3>
            <div className="space-y-4">
              {criticalAlerts.map((alert, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  alert.impact === 'Critical' 
                    ? 'bg-red-50 border-red-200'
                    : alert.impact === 'High'
                    ? 'bg-orange-50 border-orange-200'
                    : 'bg-yellow-50 border-yellow-200'
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{alert.type}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      alert.impact === 'Critical' 
                        ? 'bg-red-100 text-red-800'
                        : alert.impact === 'High'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {alert.impact}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{alert.time}</p>
                  <p className="font-medium text-gray-800">{alert.action}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-sky-900 text-white rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-4">AI Insights</h3>
            <div className="space-y-3">
              {aiInsights.map((insight, index) => (
                <div key={index} className="flex items-start p-3 bg-sky-700/30 rounded-lg">
                  <Brain className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{insight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link 
                href="/capabilities/automation/smart-irrigation"
                className="flex items-center p-3 bg-sky-50 rounded-lg hover:bg-sky-100"
              >
                <Droplets className="h-5 w-5 text-sky-600 mr-3" />
                Adjust Irrigation Schedule
              </Link>
              <Link 
                href="/capabilities/automation/greenhouse"
                className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100"
              >
                <Thermometer className="h-5 w-5 text-green-600 mr-3" />
                Control Greenhouse Climate
              </Link>
              <a 
                href="/docs/sample.pdf"
                className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100"
              >
                <Download className="h-5 w-5 text-purple-600 mr-3" />
                Download Forecast Report
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Sun Cycle</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Sunrise className="h-5 w-5 text-orange-500 mr-2" />
                  <span>Sunrise</span>
                </div>
                <span className="font-semibold">06:24 AM</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Sunset className="h-5 w-5 text-purple-500 mr-2" />
                  <span>Sunset</span>
                </div>
                <span className="font-semibold">07:18 PM</span>
              </div>
              <div className="h-2 bg-gradient-to-r from-orange-400 via-yellow-400 to-purple-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-2xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Agricultural Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-sky-700">40%</div>
            <div className="text-gray-600">Water Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-green-700">25%</div>
            <div className="text-gray-600">Yield Protection</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-red-700">60%</div>
            <div className="text-gray-600">Disease Risk Reduction</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-purple-700">94%</div>
            <div className="text-gray-600">Forecast Accuracy</div>
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
            <p className="text-gray-600 mb-4">Automate watering based on weather forecast</p>
            <div className="text-blue-600 font-semibold">Configure →</div>
          </Link>
          
          <Link 
            href="/capabilities/iotsensors/weather"
            className="group bg-gradient-to-r from-sky-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-sky-700">Live Weather Sensors</h4>
            <p className="text-gray-600 mb-4">Real-time weather monitoring stations</p>
            <div className="text-sky-600 font-semibold">View Dashboard →</div>
          </Link>
          
          <Link 
            href="/capabilities/AIAnalytics/yield-analysis"
            className="group bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-green-700">Yield Analysis</h4>
            <p className="text-gray-600 mb-4">Predict harvest based on weather patterns</p>
            <div className="text-green-600 font-semibold">Analyze →</div>
          </Link>
        </div>
      </div>
    </div>
  );
}