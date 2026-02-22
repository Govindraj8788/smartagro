"use client";

import { Bell } from "lucide-react";
import { useState } from "react";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "Weather Alert",
      message: "Heavy rain expected tomorrow 🌧",
      time: "10 min ago",
    },
    {
      id: 2,
      title: "Irrigation Reminder",
      message: "Field A needs watering 💧",
      time: "1 hour ago",
    },
    {
      id: 3,
      title: "Crop Health",
      message: "Low nitrogen detected 🌱",
      time: "Yesterday",
    },
  ];

  return (
    <div className="relative">
      {/* Bell Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-full hover:bg-emerald-50 transition"
      >
        <Bell className="w-5 h-5" />

        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white rounded-full px-1.5">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-80 bg-white shadow-xl rounded-xl overflow-hidden z-50">
          <div className="px-4 py-3 border-b font-semibold text-emerald-700">
            Notifications
          </div>

          {notifications.map((n) => (
            <div
              key={n.id}
              className="px-4 py-3 hover:bg-emerald-50 cursor-pointer border-b"
            >
              <p className="text-sm font-medium">{n.title}</p>
              <p className="text-xs text-gray-600">{n.message}</p>
              <p className="text-[10px] text-gray-400 mt-1">{n.time}</p>
            </div>
          ))}

          <div className="px-4 py-2 text-center text-sm text-emerald-600 hover:bg-emerald-50 cursor-pointer">
            View all alerts →
          </div>
        </div>
      )}
    </div>
  );
}
