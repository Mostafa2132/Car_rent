"use client";
import React, { useState, useEffect } from "react";
import { FiArrowRight, FiClock, FiPercent } from "react-icons/fi";
import { IoSparkles } from "react-icons/io5";
import { BsLightningChargeFill } from "react-icons/bs";
import Link from "next/link";

export default function OfferComp() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown Timer
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7); // 7 days from now

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const offers = [
    {
      id: 1,
      title: "Weekend Special",
      discount: "30% OFF",
      description: "Rent any luxury car for the weekend",
      code: "WEEKEND30",
      icon: <IoSparkles className="w-8 h-8" />,
      gradient: "from-amber-500 to-orange-500",
    },
    {
      id: 2,
      title: "Flash Deal",
      discount: "50% OFF",
      description: "First 3 hours free on selected vehicles",
      code: "FLASH50",
      icon: <BsLightningChargeFill className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 3,
      title: "New Member",
      discount: "25% OFF",
      description: "First rental discount for new customers",
      code: "NEW25",
      icon: <FiPercent className="w-8 h-8" />,
      gradient: "from-amber-400 to-yellow-500",
    },
  ];

  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Glow */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 
        rounded-xl sm:rounded-2xl blur-lg sm:blur-xl"
        ></div>

        {/* Box */}
        <div
          className="
          relative
          bg-slate-900/90 backdrop-blur-xl
          border border-slate-700/50
          rounded-xl sm:rounded-2xl
          px-4 py-3 sm:px-6 sm:py-4
          min-w-[64px] sm:min-w-[80px]
        "
        >
          <span
            className="
            block text-center font-black
            text-2xl sm:text-3xl lg:text-4xl
            text-transparent bg-gradient-to-br from-amber-400 to-orange-500 bg-clip-text
          "
          >
            {value.toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Label */}
      <span
        className="
        mt-1 sm:mt-2
        text-[10px] sm:text-sm
        text-slate-400 font-medium
        uppercase tracking-wider
      "
      >
        {label}
      </span>
    </div>
  );

  return (
    <section className="relative py-20 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-amber-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full backdrop-blur-sm mb-6">
            <BsLightningChargeFill className="text-amber-400 animate-pulse" />
            <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">
              Limited Time Offers
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
            Exclusive{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Deals
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Don't miss out on our amazing rental offers and discounts
          </p>
        </div>

        {/* Main Offer Banner */}
        <div className="relative mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-orange-500/30 to-amber-500/30 rounded-3xl blur-2xl opacity-50"/>

          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f59e0b,transparent_70%)]"/>
            </div>

            <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Left Side - Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
                  <FiClock className="text-red-400" />
                  <span className="text-red-400 text-sm font-bold">
                    Ending Soon
                  </span>
                </div>

                <div>
                  <h3 className="text-5xl lg:text-6xl font-black text-white mb-4">
                    <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                      50% OFF
                    </span>
                  </h3>
                  <p className="text-2xl font-bold text-white mb-2">
                    Super Flash Sale
                  </p>
                  <p className="text-slate-400 text-lg">
                    Book any premium vehicle and get instant 50% discount on
                    your first day rental
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                    <span className="text-slate-400 text-sm">Use Code:</span>
                    <span className="text-amber-400 font-black text-lg ml-2">
                      MEGA50
                    </span>
                  </div>
                  <button className="p-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-xl transition-all">
                    <svg
                      className="w-5 h-5 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 rounded-xl font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/30 group"
                >
                  Book Now
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right Side - Countdown */}
              {/* Countdown */}
              <div className="flex items-center justify-center">
                <div className="space-y-6">
                  <p className="text-center text-slate-400 text-sm uppercase tracking-widest">
                    Offer Ends In
                  </p>

                  {/* Mobile: Grid | Desktop: Flex */}
                  <div className="grid grid-cols-2 gap-4 md:flex md:items-center md:gap-3">
                    <TimeBox value={timeLeft.days} label="Days" />

                    <span className="hidden md:flex text-3xl font-black text-amber-400 pb-8">
                      :
                    </span>

                    <TimeBox value={timeLeft.hours} label="Hours" />

                    <span className="hidden md:flex text-3xl font-black text-amber-400 pb-8">
                      :
                    </span>

                    <TimeBox value={timeLeft.minutes} label="Mins" />

                    <span className="hidden md:flex text-3xl font-black text-amber-400 pb-8">
                      :
                    </span>

                    <TimeBox value={timeLeft.seconds} label="Secs" />
                  </div>

                  <p className="text-center text-amber-400 text-sm font-bold animate-pulse">
                    ⚡ Limited spots available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${offer.gradient} mb-4 shadow-lg`}
                >
                  {React.cloneElement(offer.icon, {
                    className: "w-8 h-8 text-slate-950",
                  })}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {offer.title}
                </h3>

                <div className="text-4xl font-black mb-3">
                  <span
                    className={`bg-gradient-to-r ${offer.gradient} bg-clip-text text-transparent`}
                  >
                    {offer.discount}
                  </span>
                </div>

                <p className="text-slate-400 mb-4">{offer.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">Code:</span>
                    <span className="text-sm font-bold text-amber-400">
                      {offer.code}
                    </span>
                  </div>
                  <button className="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-all group-hover:bg-amber-500/10 group-hover:border-amber-500/30 border border-slate-700/50">
                    <FiArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">
            Can't find what you're looking for?
          </p>
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 hover:border-amber-500/50 text-white rounded-xl font-medium transition-all hover:scale-105 group"
          >
            View All Cars
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
