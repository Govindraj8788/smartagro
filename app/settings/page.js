"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function SettingsPage() {
  const { data: session, status } = useSession();

  const [darkMode, setDarkMode] = useState(false);
  const [weatherUnit, setWeatherUnit] = useState("celsius");
  const [notifications, setNotifications] = useState(true);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading settings...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-white px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* PAGE TITLE */}
        <div>
          <h1 className="text-3xl font-bold text-emerald-700">
            Account Settings
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your profile, preferences & app experience 🌱
          </p>
        </div>

        {/* PROFILE CARD */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center gap-6">
          {session?.user?.image && (
            <Image
              src={session.user.image}
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full border"
            />
          )}

          <div className="flex-1 text-center md:text-left">
            <p className="text-xl font-semibold">{session?.user?.name}</p>
            <p className="text-gray-600">{session?.user?.email}</p>
            <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">
              Logged in with Google
            </span>
          </div>

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* PREFERENCES */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* APPEARANCE */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">
              🎨 Appearance
            </h2>

            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`px-4 py-1 rounded-full text-sm transition ${
                  darkMode
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {darkMode ? "ON" : "OFF"}
              </button>
            </div>
          </div>

          {/* WEATHER SETTINGS */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">
              🌦 Weather Preferences
            </h2>

            <select
              value={weatherUnit}
              onChange={(e) => setWeatherUnit(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="celsius">Celsius (°C)</option>
              <option value="fahrenheit">Fahrenheit (°F)</option>
            </select>
          </div>

          {/* NOTIFICATIONS */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">
              🔔 Notifications
            </h2>

            <div className="flex items-center justify-between">
              <span>Crop & Weather Alerts</span>
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="w-5 h-5 accent-emerald-600"
              />
            </div>
          </div>

          {/* SECURITY */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">
              🔐 Security
            </h2>

            <p className="text-sm text-gray-600 mb-3">
              You are signed in using Google authentication.
            </p>

            <button
              disabled
              className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-500 cursor-not-allowed"
            >
              Change Password (Google Managed)
            </button>
          </div>
        </div>

        {/* DANGER ZONE */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-red-600 mb-2">
            ⚠️ Danger Zone
          </h2>
          <p className="text-sm text-red-500 mb-4">
            Account deletion is permanent and cannot be undone.
          </p>

          <button
            disabled
            className="px-4 py-2 rounded-lg bg-red-300 text-white cursor-not-allowed"
          >
            Delete Account (Coming Soon)
          </button>
        </div>

      </div>
    </main>
  );
}
