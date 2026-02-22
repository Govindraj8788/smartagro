"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Bell } from "lucide-react";
import NotificationBell from "./NotificationBell";

// import { useSession, signIn, signOut } from "next-auth/react";

// "use client";
// import { signIn } from "next-auth/react";

// <button onClick={() => signIn("google")}>
//   Sign in with Google
// </button>

export default function Navbar() {
  const { data: session, status } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const LOGO = "/farmax-logo.png";

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-emerald-50/70 via-white/60 to-emerald-50/50 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left side */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center transform group-hover:scale-105 transition-transform">
                <img
                  src="logo.png"
                  alt="FarmaX"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-lg font-bold leading-none">FarmaX</div>
                <div className="text-xs text-emerald-600 -mt-0.5">
                  Smart Agriculture
                </div>
              </div>
            </Link>

            {/* Desktop Navbar */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-emerald-700 transition"
              >
                Home
              </Link>

              {/* Products — hover dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <div className="flex items-center gap-1">
                  {/* Products text → navigate */}
                  <Link
                    href="/products"
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-700 transition"
                  >
                    Products
                  </Link>

                  {/* Dropdown toggle */}
                  <button
                    onClick={() => setProductsOpen((s) => !s)}
                    className="p-2 rounded-md cursor-pointer hover:text-emerald-700"
                    type="button"
                  >
                    <ChevronDown size={16} />
                  </button>
                </div>

                {/* Dropdown menu */}
                {productsOpen && (
                  <div className="absolute left-0 mt-3 w-[720px] bg-white rounded-2xl shadow-2xl border p-6 grid grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800">
                        IoT & Sensors
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        Soil & climate monitoring.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-800">
                        Analytics
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        Yield predictions & insights.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-800">
                        Automation
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        Smart farming drones & robotics.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/solutions"
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-emerald-700 transition"
              >
                Solutions
              </Link>

              <Link
                href="/resources"
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-emerald-700 transition"
              >
                Resources
              </Link>

              <Link
                href="/pricing"
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-emerald-700 transition"
              >
                Pricing
              </Link>

              <Link
                href="/about"
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-emerald-700 transition"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-3">
              <NotificationBell />

              {/* Profile Menu */}
              {/* Profile Menu */}
              <div className="relative">
                {/* LOGGED OUT */}
                {status !== "loading" && !session && (
                  <button
                    onClick={() => signIn("google")}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 text-white text-sm font-semibold shadow hover:shadow-lg transition"
                  >
                    Login with Google
                  </button>
                )}

                {/* LOGGED IN */}
                {session && (
                  <>
                    <button
                      onClick={() => setProfileOpen((s) => !s)}
                      className="flex items-center gap-2 border rounded-full px-3 py-1 hover:shadow-md transition bg-white"
                      type="button"
                    >
                      <img
                        src={session.user.image || "logo.png"}
                        alt="avatar"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium">
                        {session.user.name}
                      </span>
                      <ChevronDown size={14} />
                    </button>

                    {profileOpen && (
                      <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-xl border overflow-hidden animate-fadeIn">
                        <div className="px-4 py-3 border-b">
                          <p className="text-sm font-semibold">
                            {session.user.name}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {session.user.email}
                          </p>
                        </div>

                        <Link
                          href="/profile"
                          className="block px-4 py-2 text-sm hover:bg-emerald-50 transition"
                        >
                          👤 Profile
                        </Link>

                        <Link
                          href="/settings"
                          className="block px-4 py-2 text-sm hover:bg-emerald-50 transition"
                        >
                          ⚙️ Settings
                        </Link>
                        {session && (
                          <Link
                            href="/dashboard"
                            className="block px-4 py-2 text-sm hover:bg-emerald-50 transition"
                          >
                            〰️ Dashboard
                          </Link>
                        )}

                        <button
                          onClick={() => signOut({ callbackUrl: "/" })}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                        >
                          🚪 Logout
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            <Link
              href="//smart-irrigation/get-started"
              className="hidden lg:inline-block px-5 py-2 bg-gradient-to-r from-emerald-500 to-lime-400 text-white rounded-full font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md bg-white/60 shadow-md"
              onClick={() => setMobileOpen((s) => !s)}
              type="button"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-6">
          <div className="mt-4 bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img
                  src="logo.png"
                  alt="FarmaX"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">FarmaX</div>
                <div className="text-xs text-gray-500">Smart Agriculture</div>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <Link href="/app/page.js" className="block px-3 py-2">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2">
                About
              </Link>
              <Link href="/products" className="block px-3 py-2">
                Products
              </Link>
              <Link href="/solutions" className="block px-3 py-2">
                Solutions
              </Link>
              <Link href="/resources" className="block px-3 py-2">
                Resources
              </Link>
              <Link href="/pricing" className="block px-3 py-2">
                Pricing
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
