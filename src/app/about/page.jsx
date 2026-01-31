
import React from "react";
import { FiAward, FiUsers, FiShield, FiTrendingUp } from "react-icons/fi";
import { IoSparkles, IoCarSport } from "react-icons/io5";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaHandshake, FaClock, FaGem } from "react-icons/fa";
import Link from "next/link";


export const metadata = {
  title: "Car Rental App / About Us",
};



export default function About() {

  const stats = [
    {
      id: 1,
      number: "50K+",
      label: "Happy Customers",
      icon: <FiUsers className="w-6 h-6" />,
    },
    {
      id: 2,
      number: "500+",
      label: "Premium Vehicles",
      icon: <IoCarSport className="w-6 h-6" />,
    },
    {
      id: 3,
      number: "15+",
      label: "Years Experience",
      icon: <FiAward className="w-6 h-6" />,
    },
    {
      id: 4,
      number: "99.9%",
      label: "Satisfaction Rate",
      icon: <IoSparkles className="w-6 h-6" />,
    },
  ];

  const values = [
    {
      id: 1,
      icon: <FaGem className="w-8 h-8" />,
      title: "Premium Quality",
      description: "We offer only the finest, well-maintained luxury vehicles for your journey",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      id: 2,
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Customer First",
      description: "Your satisfaction and comfort are our top priorities in every interaction",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 3,
      icon: <FiShield className="w-8 h-8" />,
      title: "Safety & Trust",
      description: "All vehicles undergo rigorous safety checks and comprehensive insurance",
      gradient: "from-amber-400 to-yellow-500",
    },
    {
      id: 4,
      icon: <FaClock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance to ensure a smooth rental experience",
      gradient: "from-yellow-500 to-amber-600",
    },
  ];

  const milestones = [
    { year: "2009", event: "Company Founded", description: "Started with a vision to revolutionize car rentals" },
    { year: "2015", event: "Expanded Fleet", description: "Reached 100+ premium vehicles in our collection" },
    { year: "2020", event: "Digital Platform", description: "Launched our state-of-the-art booking system" },
    { year: "2024", event: "Industry Leader", description: "Became the #1 premium car rental service" },
  ];

  const features = [
    { icon: "✓", text: "Flexible rental periods" },
    { icon: "✓", text: "Instant booking confirmation" },
    { icon: "✓", text: "No hidden fees" },
    { icon: "✓", text: "Free delivery & pickup" },
    { icon: "✓", text: "Comprehensive insurance" },
    { icon: "✓", text: "Premium vehicle selection" },
  ];

  return (
    <section className="relative bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-amber-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full backdrop-blur-sm mb-6">
            <BsLightningChargeFill className="text-amber-400 animate-pulse" />
            <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">
              About Us
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Redefining{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Luxury Rentals
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We're passionate about providing exceptional car rental experiences that combine premium quality, 
            outstanding service, and unmatched convenience for every journey.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center hover:border-amber-500/30 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-4">
                  {React.cloneElement(stat.icon, { className: "w-6 h-6 text-amber-400" })}
                </div>
                <div className="text-4xl font-black mb-2">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                </div>
                <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-amber-400 text-sm font-bold">Our Story</span>
                </div>

                <h2 className="text-4xl font-black text-white">
                  Journey to{" "}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Excellence
                  </span>
                </h2>

                <p className="text-slate-400 leading-relaxed">
                  Founded in 2009, we started with a simple mission: to make luxury car rentals accessible, 
                  transparent, and enjoyable. Over the years, we've grown from a small startup to the 
                  industry's most trusted name.
                </p>

                <p className="text-slate-400 leading-relaxed">
                  Today, we serve thousands of satisfied customers monthly, offering an unparalleled fleet 
                  of premium vehicles and a seamless booking experience that sets us apart.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm">
                        {feature.icon}
                      </div>
                      <span className="text-slate-300 text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Milestones */}
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center">
                        <span className="text-amber-400 font-black text-lg">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.event}</h3>
                      <p className="text-slate-400 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full backdrop-blur-sm mb-6">
            <IoSparkles className="text-amber-400" />
            <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">
              Our Values
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            What{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Drives Us
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.id}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300 h-full">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} mb-4 shadow-lg`}>
                  {React.cloneElement(value.icon, { className: "w-8 h-8 text-slate-950" })}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-orange-500/30 to-amber-500/30 rounded-3xl blur-2xl opacity-50"></div>
          
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
              Ready to{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Start Your Journey?
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Experience the difference with our premium fleet and exceptional service
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 rounded-xl font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/30"
              >
                Browse Vehicles
                <IoCarSport className="w-5 h-5" />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 hover:border-amber-500/50 text-white rounded-xl font-bold uppercase tracking-wider transition-all hover:scale-105"
              >
                Contact Us
                <FiTrendingUp className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}