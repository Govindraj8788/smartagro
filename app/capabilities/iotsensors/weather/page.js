"use client";

import { motion } from "framer-motion";
import { 
  CloudRain, 
  Thermometer, 
  Wind, 
  Droplets,
  Download,
  ArrowLeft,
  AlertCircle,
  Sunrise,
  Sunset,
  Brain,
  BarChart3,
  Cloud
} from "lucide-react";
import Link from "next/link";

export default function WeatherPage() {
  const currentWeather = {
    temperature: "24°C",
    humidity: "65%",
    rainfall: "2.4 mm",
    windSpeed: "12 km/h",
    windDirection: "NE",
    pressure: "1013 hPa",
    feelsLike: "26°C",
    uvIndex: "6",
  };

  const forecast = [
    { day: "Today", high: "26°C", low: "18°C", condition: "Partly Cloudy", rain: "20%" },
    { day: "Tomorrow", high: "24°C", low: "17°C", condition: "Light Rain", rain: "60%" },
    { day: "Wed", high: "22°C", low: "16°C", condition: "Rain", rain: "85%" },
    { day: "Thu", high: "23°C", low: "15°C", condition: "Cloudy", rain: "40%" },
    { day: "Fri", high: "25°C", low: "17°C", condition: "Sunny", rain: "10%" },
  ];

  const alerts = [
    { type: "Rain Alert", message: "Heavy rain expected Wednesday", severity: "medium" },
    { type: "Wind Advisory", message: "Strong winds tomorrow afternoon", severity: "low" },
    { type: "Frost Warning", message: "Possible frost Thursday morning", severity: "high" },
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
            <h1 className="text-4xl font-bold text-gray-900">Weather Station</h1>
            <p className="text-gray-600 mt-2">Hyperlocal weather monitoring and forecasting</p>
          </div>
          <Link 
            href="/capabilities/AIAnalytics/weather-forecast"
            className="inline-flex items-center text-sky-600 hover:text-sky-800 font-semibold"
          >
            AI Weather Forecast
            <Brain className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">Current Conditions</h2>
                <p>Farm Location • Updated 5 min ago</p>
              </div>
              <Cloud className="h-12 w-12" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{currentWeather.temperature}</div>
                <div className="text-sky-200">Temperature</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{currentWeather.humidity}</div>
                <div className="text-sky-200">Humidity</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{currentWeather.rainfall}</div>
                <div className="text-sky-200">Rainfall</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{currentWeather.windSpeed}</div>
                <div className="text-sky-200">Wind Speed</div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-sky-600/30 p-4 rounded-xl">
                <div className="text-sm text-sky-200">Feels Like</div>
                <div className="text-xl font-bold">{currentWeather.feelsLike}</div>
              </div>
              <div className="bg-sky-600/30 p-4 rounded-xl">
                <div className="text-sm text-sky-200">Wind Direction</div>
                <div className="text-xl font-bold">{currentWeather.windDirection}</div>
              </div>
              <div className="bg-sky-600/30 p-4 rounded-xl">
                <div className="text-sm text-sky-200">UV Index</div>
                <div className="text-xl font-bold">{currentWeather.uvIndex}</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">5-Day Forecast</h3>
            <div className="space-y-4">
              {forecast.map((day, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-sky-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-16 text-center">
                      <div className="font-bold">{day.day}</div>
                    </div>
                    <div className="ml-6">
                      <div className="font-semibold">{day.condition}</div>
                      <div className="text-sm text-gray-600">{day.rain} chance of rain</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{day.high}</div>
                    <div className="text-gray-600">Low: {day.low}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Weather Alerts</h3>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  alert.severity === 'high' 
                    ? 'bg-red-50 border-red-200'
                    : alert.severity === 'medium'
                    ? 'bg-yellow-50 border-yellow-200'
                    : 'bg-blue-50 border-blue-200'
                }`}>
                  <div className="flex items-start">
                    <AlertCircle className={`h-5 w-5 mt-0.5 mr-3 ${
                      alert.severity === 'high' ? 'text-red-600' :
                      alert.severity === 'medium' ? 'text-yellow-600' : 'text-blue-600'
                    }`} />
                    <div>
                      <h4 className="font-semibold">{alert.type}</h4>
                      <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-sky-900 text-white rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link 
                href="/capabilities/automation/smart-irrigation"
                className="flex items-center p-3 bg-sky-700/30 rounded-lg hover:bg-sky-700/50"
              >
                <Droplets className="h-5 w-5 mr-3" />
                Adjust Irrigation
              </Link>
              <a 
                href="/docs/sample.pdf"
                className="flex items-center p-3 bg-sky-700/30 rounded-lg hover:bg-sky-700/50"
              >
                <Download className="h-5 w-5 mr-3" />
                Download Weather Report
              </a>
              <Link 
                href="/capabilities/automation/greenhouse"
                className="flex items-center p-3 bg-sky-700/30 rounded-lg hover:bg-sky-700/50"
              >
                <Thermometer className="h-5 w-5 mr-3" />
                Control Greenhouse
              </Link>
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

          <div className="relative h-48 rounded-2xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="font-semibold">Local Weather Station</p>
              <p className="text-sm text-sky-200">Updates every 5 minutes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Connected Systems</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/capabilities/automation/smart-irrigation"
            className="group bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-sky-700">Smart Irrigation</h4>
            <p className="text-gray-600 mb-4">Adjust watering based on weather</p>
            <div className="text-sky-600 font-semibold">Configure →</div>
          </Link>
          
          <Link 
            href="/capabilities/AIAnalytics/crop-prediction"
            className="group bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-green-700">Crop Prediction</h4>
            <p className="text-gray-600 mb-4">Plan crops based on seasonal forecast</p>
            <div className="text-green-600 font-semibold">Analyze →</div>
          </Link>
          
          <Link 
            href="/capabilities/iotsensors/soil-moisture"
            className="group bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-cyan-700">Soil Moisture</h4>
            <p className="text-gray-600 mb-4">Monitor evaporation rates</p>
            <div className="text-cyan-600 font-semibold">View Dashboard →</div>
          </Link>
        </div>
      </div>
    </div>
  );
}