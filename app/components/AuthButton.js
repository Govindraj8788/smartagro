"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // ❌ Not logged in
  if (!session) {
    return (
      <button
        onClick={() => signIn("google")}
        className="bg-emerald-600 text-white px-4 py-2 rounded-xl font-semibold"
      >
        Login with Google
      </button>
    );
  }

  // ✅ Logged in
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="border border-red-500 text-red-600 px-4 py-2 rounded-xl font-semibold"
    >
      Logout
    </button>
  );
}
