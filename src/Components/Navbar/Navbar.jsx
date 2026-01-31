"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";

export default function Navbar() {
  const navLinks = [
    { name: "Fleet", href: "/" },
    { name: "Brands", href: "/brands" },
    { name: "Offers", href: "/offer" },
    { name: "About", href: "/about" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-20 px-6 lg:px-12 py-6 transition-all duration-1000 bg-slate-900 backdrop-blur-sm shadow`}
      >
        <div className="max-w-8xl mx-auto flex items-center justify-between">
          <Link href={"/"} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
              <svg
                className="w-6 h-6 text-slate-950"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              VelocityRent
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className=" flex  items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg font-semibold text-sm transition-all hover:scale-105 shadow-lg shadow-amber-500/20">
                Sign In
              </Link>
              <Link href="/register" className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg font-semibold text-sm transition-all hover:scale-105 shadow-lg shadow-amber-500/20">
                Register
              </Link>
            </div>
            <div className="md:hidden flex justify-center items-center">
              <button
                onClick={() => {
                  setOpen(!open);
                }}
                className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white transition-colors"
              >
                {open ? (
                  <HiMiniXMark className="size-4  " />
                ) : (
                  <HiMiniBars3 className="size-4 " />
                )}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="absolute top-full left-0 w-full bg-slate-900 backdrop-blur-sm shadow-md md:hidden flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className=" flex items-center space-x-4">
              <Link href="/login" className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg font-semibold text-sm transition-all hover:scale-105 shadow-lg shadow-amber-500/20">
                Sign In
              </Link>
              <Link href="/register" className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg font-semibold text-sm transition-all hover:scale-105 shadow-lg shadow-amber-500/20">
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
