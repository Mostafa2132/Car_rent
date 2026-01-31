"use client";

import { useState } from "react";
import {
  FaAngleDoubleUp,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaRegClock,
  FaTwitterSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const SocialLinks = [
    { name: "Facebook", icon: <FaFacebook className="w-5 h-5" /> },
    { name: "Twitter", icon: <FaTwitterSquare className="w-5 h-5" /> },
    { name: "Instagram", icon: <FaInstagram className="w-5 h-5" /> },
    { name: "LinkedIn", icon: <FaLinkedinIn className="w-5 h-5" /> },
  ];
  const QuickLinks = [
    { name: " About Us", href: "/" },
    { name: "Our Fleet", href: "/" },
    { name: "Locations", href: "/" },
    { name: "Special Offers", href: "/" },
    { name: "Corporate Rentals", href: "/" },
  ];

  const Support = [
    { name: "Help Center", href: "/" },
    { name: "FAQs", href: "/" },
    { name: "Terms & Conditions", href: "/" },
    { name: "Privacy Policy", href: "/" },
    { name: "Contact Us", href: "/" },
  ];

  const [email, setEmail] = useState("");

  const handleNewsletter = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
      </div>

      <div className="relative z-10 px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-8xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
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
              </div>

              <p className="text-slate-400 leading-relaxed max-w-sm">
                Experience the freedom of the open road with our premium fleet.
                From city streets to mountain highways, we've got the perfect
                ride for every journey.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-3">
                {SocialLinks.map((link) => (
                  <a
                    key={link.name}
                    href="#"
                    className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-amber-400 transition-colors shadow-md shadow-amber-500/10"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {QuickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-amber-400 transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 group-hover:bg-amber-400 transition-colors"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg mb-6">Support</h3>
              <ul className="space-y-3">
                {Support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-amber-400 transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 group-hover:bg-amber-400 transition-colors"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg mb-6">
                Stay Updated
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Subscribe to get special offers, exclusive deals, and the latest
                news.
              </p>

              <form onSubmit={handleNewsletter} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-lg font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/20"
                >
                  Subscribe
                </button>
              </form>

              <div className="flex items-center space-x-2 pt-2">
                <svg
                  className="w-4 h-4 text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-slate-500 text-xs">
                  We respect your privacy
                </span>
              </div>
            </div>
          </div>

          {/* Contact Info Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 mb-8 border-y border-slate-800/50">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center flex-shrink-0">
                <FaPhone className="w-6 h-6 rotate-90 text-amber-400" />
              </div>
              <div>
                <p className="text-slate-500 text-sm">Call Us</p>
                <p className="text-white font-semibold">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center flex-shrink-0">
                <MdEmail className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-slate-500 text-sm">Email Us</p>
                <p className="text-white font-semibold">
                  info@velocityrent.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center flex-shrink-0">
                <FaRegClock className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-slate-500 text-sm">Working Hours</p>
                <p className="text-white font-semibold">24/7 Available</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} VelocityRent. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-slate-500 hover:text-amber-400 text-sm transition-colors"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-slate-500 text-sm">Made with</span>
         ❤️ 
              <span className="text-slate-500 ms-2 text-sm">for drivers</span>
            </div>
          </div>
          <div className="w-full">
            <p className="text-center text-slate-500 text-sm py-4">
              Made with Mostafa M.Ebrahem ❤️
            </p>
            <p className="text-center text-slate-500 text-sm py-1">
              Back end API by ENG: Abdelkader Mahmoud 
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-8 z-50  right-8 w-12 h-12 cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20 transition-all hover:scale-110 group"
        aria-label="Scroll to top"
      >
   <FaAngleDoubleUp  />

      </button>
    </footer>
  );
}
