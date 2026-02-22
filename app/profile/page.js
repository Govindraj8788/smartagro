"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // 🔒 If not logged in → redirect to home
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  // ⏳ Loading state
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );
  }

  // Extra safety
  if (!session) return null;

  const { user } = session;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-6">

        {/* Avatar */}
        <div className="flex flex-col items-center">
          <img
            src={user.image || "/logo.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border"
          />
          <h1 className="mt-4 text-xl font-bold">{user.name}</h1>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        {/* Details */}
        <div className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Provider</span>
            <span className="font-medium">Google</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">User ID</span>
            <span className="font-medium truncate max-w-[180px]">
              {session.user.email}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => router.push("/")}
            className="flex-1 px-4 py-2 rounded-lg border text-sm hover:bg-gray-50"
          >
            ⬅ Back Home
          </button>

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex-1 px-4 py-2 rounded-lg bg-red-500 text-white text-sm hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
