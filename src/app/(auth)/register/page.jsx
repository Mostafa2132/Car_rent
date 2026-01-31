"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import { FaUser, FaLock, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const Input = ({ label, icon: Icon, type, placeholder, toggle, onToggle }) => (
    <div className="space-y-2">
      <label className="block text-xs uppercase tracking-widest text-slate-400 font-bold">
        {label}
      </label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400/60 group-focus-within:text-amber-400 transition-all duration-300">
          <Icon size={18} />
        </div>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-slate-900/50 border border-slate-800/50 
                   text-slate-100 placeholder-slate-600 
                   focus:outline-none focus:border-amber-500/60 focus:bg-slate-900/70 focus:ring-2 focus:ring-amber-500/20
                   hover:border-slate-700/50 transition-all duration-300 backdrop-blur-md"
        />
        {toggle && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-amber-400 transition-colors duration-300"
          >
            {type === "password" ? <FiEye size={18} /> : <FiEyeOff size={18} />}
          </button>
        )}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-slate-950 py-12 px-4 overflow-hidden">
      {/* Enhanced Amber Background Effects */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-amber-400/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f59e0b15,transparent_60%)]"></div>

      {/* Main Container */}
      <div className="relative w-full max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Branding */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">Premium Registration</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                  Join Our
                  <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                    Elite Community
                  </span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                  Experience premium features and exclusive benefits designed for ambitious individuals like you.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 pt-4">
                {[
                  { icon: "✓", text: "Unlimited access to all features" },
                  { icon: "✓", text: "Priority customer support 24/7" },
                  { icon: "✓", text: "Advanced analytics dashboard" },
                  { icon: "✓", text: "Exclusive community access" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold group-hover:bg-amber-500/20 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <span className="text-slate-300 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/50">
                <div className="space-y-1">
                  <div className="text-3xl font-black text-amber-400">50K+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Active Users</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-black text-amber-400">4.9</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Rating</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-black text-amber-400">100%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form Card */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/30 via-orange-400/20 to-amber-500/30 rounded-3xl blur-2xl opacity-50"></div>

            {/* Card */}
            <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 lg:p-10 shadow-2xl">
              
              {/* Header */}
              <div className="text-center mb-8">
                <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-400/10 flex items-center justify-center mb-5 border border-amber-500/30 shadow-lg shadow-amber-500/20">
                  <FaUser className="text-amber-400 text-3xl" />
                </div>
                <h1 className="text-4xl font-black text-white tracking-tight mb-2">
                  Create Account
                </h1>
                <p className="text-slate-400 text-sm">
                  Get started with your premium journey
                </p>
              </div>

              {/* Form */}
              <form className="space-y-5">
                {/* Name Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    icon={FaUser}
                    type="text"
                    placeholder="Mostafa"
                  />
                  <Input
                    label="Last Name"
                    icon={FaUser}
                    type="text"
                    placeholder="Ebrahem"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Email"
                    icon={FiMail}
                    type="email"
                    placeholder="you@email.com"
                  />
                  <Input
                    label="Phone"
                    icon={FaPhone}
                    type="tel"
                    placeholder="+20 123 456 789"
                  />
                </div>

                {/* Password Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Password"
                    icon={FaLock}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    toggle
                    onToggle={() => setShowPassword(!showPassword)}
                  />
                  <Input
                    label="Confirm Password"
                    icon={FaLock}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    toggle
                    onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-5 h-5 mt-0.5 rounded border-2 border-slate-700 bg-slate-900/50 text-amber-500 
                             focus:ring-2 focus:ring-amber-500/20 cursor-pointer transition-all duration-300"
                  />
                  <label htmlFor="terms" className="text-sm text-slate-400 cursor-pointer leading-relaxed">
                    I agree to the{" "}
                    <Link href="/terms" className="text-amber-400 font-bold hover:text-amber-300 transition-colors">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-amber-400 font-bold hover:text-amber-300 transition-colors">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-6 py-4 bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 
                           text-slate-950 font-black rounded-xl uppercase tracking-wider text-sm
                           hover:scale-[1.02] active:scale-[0.98] transition-all duration-300
                           shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/50
                           flex items-center justify-center gap-2 group"
                >
                  Create Account
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-800/50"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="px-4 bg-slate-900/90 text-slate-500 tracking-widest">Or continue with</span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-800/70 hover:border-amber-500/30 transition-all duration-300 group">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-slate-300 font-semibold text-sm">Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-800/70 hover:border-amber-500/30 transition-all duration-300 group">
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-slate-300 font-semibold text-sm">Facebook</span>
                </button>
              </div>

              {/* Footer */}
              <p className="text-center text-slate-400 text-sm mt-8">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-amber-400 font-bold hover:text-amber-300 transition-colors duration-300 hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}