"use client";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="h-auto py-14 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        {/* 404 Card */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* 404 Number */}
          <div className="text-center mb-6">
            <h2 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mb-4">
              404
            </h2>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-center mb-8">
            The page you&lsquo;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>

          {/* Info Box */}
          <div className="bg-slate-950/50 border border-slate-700/50 rounded-xl p-6 mb-8">
            <div className="flex items-start space-x-3">
              <svg
                className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2">
                  What happened?
                </h3>
                <p className="text-slate-400 text-sm">
                  The URL you entered might be incorrect, or the page may have
                  been removed or relocated.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => window.history.back()}
              className="flex-1 px-6 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-amber-500/50 text-white rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 group"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Go Back</span>
            </button>

            <Link
              href="/"
              className="flex-1 px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/20 flex items-center justify-center space-x-2 group"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Go Home</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-8 pt-8 border-t border-slate-800/50">
            <p className="text-slate-500 text-sm text-center mb-4">
              Or explore these pages:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <a
                href="/about"
                className="px-4 py-3 bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/30 hover:border-amber-500/30 rounded-lg text-slate-300 hover:text-amber-400 text-sm text-center transition-all"
              >
                About
              </a>
              <a
                href="/services"
                className="px-4 py-3 bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/30 hover:border-amber-500/30 rounded-lg text-slate-300 hover:text-amber-400 text-sm text-center transition-all"
              >
                Services
              </a>
              <a
                href="/contact"
                className="px-4 py-3 bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/30 hover:border-amber-500/30 rounded-lg text-slate-300 hover:text-amber-400 text-sm text-center transition-all"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Additional Help */}
          <div className="mt-8 pt-8 border-t border-slate-800/50">
            <div className="flex items-center justify-center space-x-6 text-sm">
              <a
                href="/support"
                className="text-slate-400 hover:text-amber-400 transition-colors flex items-center space-x-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span>Contact Support</span>
              </a>

              <span className="text-slate-700">•</span>

              <a
                href="/help"
                className="text-slate-400 hover:text-amber-400 transition-colors flex items-center space-x-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Help Center</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
