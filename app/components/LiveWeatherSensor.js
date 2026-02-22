"use client";

import { useEffect, useState } from "react";

export default function LiveWeatherSensor() {
    const [mounted, setMounted] = useState(false);
    const [temp, setTemp] = useState(20.2);
    const [humidity, setHumidity] = useState(50);
    const [city, setCity] = useState("Detecting location…");

    useEffect(() => {
        setMounted(true);

        if (!navigator.geolocation) {
            setCity("Location unavailable");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                const { latitude, longitude } = pos.coords;

                try {
                    // 🌍 Reverse geocoding (FREE – OpenStreetMap)
                    const res = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                    );
                    const data = await res.json();

                    setCity(
                        data.address?.city ||
                        data.address?.town ||
                        data.address?.village ||
                        data.address?.state ||
                        "Your area"
                    );
                } catch {
                    setCity("Your area");
                }
            },
            () => {
                setCity("Location denied");
            }
        );

        // 🌡️ Smooth live changes
        const interval = setInterval(() => {
            setTemp((t) =>
                +(Math.min(40, Math.max(10, t + (Math.random() * 0.6 - 0.3)))).toFixed(1)
            );
            setHumidity((h) =>
                Math.min(90, Math.max(30, h + Math.floor(Math.random() * 3 - 1)))
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    // ⛔ Prevent hydration mismatch
    if (!mounted) return null;

    return (
        <div
            className="
        bg-white/90 backdrop-blur-md
        rounded-xl shadow-xl border border-white/40
        p-4 w-72
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-2xl
      "
        >
            <div className="flex items-center gap-3">
                {/* ICON */}
                <div className="w-11 h-11 rounded-lg bg-emerald-100 flex items-center justify-center text-lg">
                    🌦️
                </div>

                {/* TEXT */}
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-800">
                            Field Weather Sensor
                        </span>
                        <span className="text-xs text-emerald-600 font-bold animate-pulse">
                            ● LIVE
                        </span>
                    </div>

                    <div className="text-xs text-gray-500 mt-1">
                        📍 <span className="font-medium">{city}</span>
                    </div>

                    <div className="text-xs text-gray-500 mt-1">
                        Temp:{" "}
                        <span className="font-semibold text-gray-800">
                            {temp}°C
                        </span>{" "}
                        • Humidity:{" "}
                        <span className="font-semibold text-gray-800">
                            {humidity}%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
