"use client";

import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { FaArrowsRotate } from "react-icons/fa6";


export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        {/* Error Card */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-500/20">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Oops! Something Went Wrong
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-center mb-8">
            We encountered an unexpected error. Don't worry, our team has been notified.
          </p>

          {/* Error Message */}
          <div className="bg-slate-950/50 border border-slate-700/50 rounded-xl p-6 mb-8">
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2">Error Details:</h3>
                <p className="text-slate-400 text-sm font-mono break-words">
                  {error?.message || "An unknown error occurred"}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={reset}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/20 flex items-center justify-center space-x-2 group"
            >
             <FaArrowsRotate className="group-hover:rotate-180 transition-transform duration-500" />

              <span>Try Again</span>
            </button>

            <Link
              href="/"
              className="flex-1 px-6 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-amber-500/50 text-white rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 group"
            >
            <IoHome className="w-5 h-5 group-hover:text-amber-400 transition-colors" />

              <span>Go Home</span>
            </Link>
          </div>

          {/* Additional Help */}
          <div className="mt-8 pt-8 border-t border-slate-800/50">
            <div className="flex items-center justify-center space-x-6 text-sm">
              <a 
                href="/support" 
                className="text-slate-400 hover:text-amber-400 transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>Contact Support</span>
              </a>
              
              <span className="text-slate-700">•</span>
              
              <a 
                href="/help" 
                className="text-slate-400 hover:text-amber-400 transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Help Center</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-6">
          <p className="text-slate-500 text-sm">
            {/* Error ID: { Math.random().toString(36).substring(2, 10).toUpperCase() } */}
          </p>
        </div>
      </div>
    </div>
  );
}