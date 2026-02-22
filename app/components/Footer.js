// app/components/footer.js
// "use client";

export default function Footer() {
  return (
    <footer className="w-full border-t border-emerald-100 bg-white/60 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} FarmaX — Smart Agriculture. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
