// app/page.js

import Link from "next/link";
import dynamic from "next/dynamic";
import LiveWeatherSensor from "./components/LiveWeatherSensor";
import HeroSlideshow from "./components/HeroSlideshow";
import CapabilitiesPage from "./capabilities/page";
// import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full">
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-700 leading-tight">
              FarmaX — Smart Agriculture for every farm
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-2xl">
              Connect IoT sensors, automate irrigation, and use AI-driven
              analytics to boost yield, reduce waste and run your farm smarter.
              Built for smallholders and commercial farms.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="\get-started"
                className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
              >
                Get Started
              </a>

              <a
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-3 border rounded-full text-emerald-700 hover:bg-emerald-50 transition"
              >
                Explore Products
              </a>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
              <li>• Real-time soil & climate monitoring</li>
              <li>• Predictive yield intelligence</li>
              <li>• Automation for irrigation & drones</li>
              <li>• Easy integration & low-power devices</li>
            </ul>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative w-[98%]">
              <img
                src="/logo.png"
                alt="Company Logo"
                width={650}
                style={{ height: "auto" }}
              />

              {/* SLIDESHOW */}
              {/* <HeroSlideshow /> */}

              {/* FLOATING LIVE SENSOR */}
              <div
                className="
        absolute
        -bottom-16
        sm:-bottom-14
        md:-bottom-20
        right-4
        z-10
        animate-fadeUp
      "
              >
                <LiveWeatherSensor />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURES */}
      /*{" "}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-emerald-700">
            Core capabilities
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl">
            From sensor fleets to AI analytics and automation — everything you
            need to modernize a farm.
          </p>
          <a
            href="/capabilities"
            className="text-sm text-emerald-700 font-medium underline"
          >
            View all
          </a>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <div className="p-6 rounded-2xl border shadow-sm">
              <div className="h-40 rounded-lg overflow-hidden">
                <Link href="/capabilities/iotsensors">
                  <img
                    src="https://i.pinimg.com/236x/06/13/4f/06134ff80e7ad74b61eb945bb55a799e.jpg"
                    alt="IoT sensors"
                    className="object-cover w-full h-full"
                  />
                </Link>
              </div>
              <h3 className="mt-4 font-semibold text-lg text-gray-800">
                IoT & Sensors
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Low-power devices for soil, weather, water & asset tracking.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="p-6 rounded-2xl border shadow-sm">
              <div className="h-40 rounded-lg overflow-hidden">
                <Link href="/capabilities/AIAnalytics">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmyuUa0j7MbIXFwNubanCTej3EGGdDLyFHFg&s"
                    alt="Analytics"
                    className="object-cover w-full h-full"
                  />
                </Link>
              </div>
              <h3 className="mt-4 font-semibold text-lg text-gray-800">
                AI Analytics
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Actionable insights: irrigation schedule, pest risk, yield
                forecasts.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="p-6 rounded-2xl border shadow-sm">
              <div className="h-40 rounded-lg overflow-hidden">
                <Link href="/capabilities/automation">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HJYGt6rpIYgnXeiUlYRCKQqWawD4J87ILQ&s"
                    alt="Automation"
                    className="object-cover w-full h-full"
                  />
                </Link>
              </div>
              <h3 className="mt-4 font-semibold text-lg text-gray-800">
                Automation
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Trigger irrigation, drones, or actuators based on rules or AI
                signals.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* PRODUCTS GRID */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-emerald-700">
                Featured products
              </h2>
              <p className="mt-1 text-gray-600">
                Hardware & platform bundles to get your farm connected.
              </p>
            </div>
            <a
              href="/products"
              className="text-sm text-emerald-700 font-medium underline"
            >
              View all products
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* PRODUCT 1 */}
            <article className="bg-white rounded-2xl shadow-md border overflow-hidden">
              <div className="h-44 relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJoCsNFs7Mct4T16mcCux_hoeJ6W2EsIHHQ&s"
                  alt="product 1"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800">
                  Field Sensor Kit
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Soil moisture, EC & temperature sensors with long battery
                  life.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-emerald-700 font-semibold">₹3,999</div>
                  <a href="/products" className="text-sm text-emerald-600">
                    Buy
                  </a>
                </div>
              </div>
            </article>

            {/* PRODUCT 2 */}
            <article className="bg-white rounded-2xl shadow-md border overflow-hidden">
              <div className="h-44 relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS6dWz8PVaPJqw-9PlnHYFP2-Wt2Hwb3yDQA&s"
                  alt="product 2"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800">
                  Irrigation Controller
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Automated valves with scheduling & remote control.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-emerald-700 font-semibold">₹8,499</div>
                  <a href="/products" className="text-sm text-emerald-600">
                    Buy
                  </a>
                </div>
              </div>
            </article>

            {/* PRODUCT 3 */}
            <article className="bg-white rounded-2xl shadow-md border overflow-hidden">
              <div className="h-44 relative">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/070/702/713/non_2x/smart-agriculture-technology-farmer-using-tablet-in-cornfield-with-data-analytics-overlay-for-crop-management-photo.jpeg"
                  alt="product 3"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800">Analytics Pro</h4>
                <p className="text-sm text-gray-500 mt-1">
                  AI analytics, alerts and historical insights.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-emerald-700 font-semibold">
                    ₹2,499/mo
                  </div>
                  <a href="/pricing" className="text-sm text-emerald-600">
                    Choose plan
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-lime-400 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">
              Ready to modernize your farm?
            </h3>
            <p className="mt-2 text-white/90">
              Start with a demo or talk to our experts.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/get-started"
              className="px-6 py-3 bg-white text-emerald-700 rounded-full font-semibold shadow"
            >
              Book a demo
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-white/30 rounded-full"
            >
              Contact sales
            </a>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-emerald-700">
            What farmers say
          </h3>
          <p className="mt-2 text-gray-600">
            Real results from growers using FarmaX.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <blockquote className="p-6 border rounded-2xl shadow-sm">
              <p className="text-gray-800">
                "We increased water efficiency by 35% — the sensors and alerts
                are a game changer."
              </p>
              <footer className="mt-4 text-sm text-gray-600">
                — Ramesh, Sugarcane Farmer
              </footer>
            </blockquote>

            <blockquote className="p-6 border rounded-2xl shadow-sm">
              <p className="text-gray-800">
                "Yield predictions helped us time fertilization perfectly. Huge
                improvement."
              </p>
              <footer className="mt-4 text-sm text-gray-600">
                — Asha, Vegetable Grower
              </footer>
            </blockquote>

            <blockquote className="p-6 border rounded-2xl shadow-sm">
              <p className="text-gray-800">
                "Easy setup and great support — recommended for every farm
                size."
              </p>
              <footer className="mt-4 text-sm text-gray-600">
                — Vikram, Orchard Owner
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
