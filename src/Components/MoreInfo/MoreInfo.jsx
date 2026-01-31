"use client";
import React, { useState } from "react";
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock, 
  FiMessageSquare,
  FiSend,
  FiCheckCircle 
} from "react-icons/fi";
import { 
  IoLogoWhatsapp, 
  IoLogoFacebook, 
  IoLogoInstagram, 
  IoLogoTwitter 
} from "react-icons/io5";
import { BsLightningChargeFill } from "react-icons/bs";

export default function MoreInfo() {
  const [openFaq, setOpenFaq] = useState(null);

  const contactInfo = [
    {
      id: 1,
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone",
      content: "+20 123 456 7890",
      subContent: "Mon-Fri 9am-6pm",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      id: 2,
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      content: "info@luxuryrent.com",
      subContent: "24/7 Email Support",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 3,
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Location",
      content: "Cairo, Egypt",
      subContent: "Downtown Office",
      gradient: "from-amber-400 to-yellow-500",
    },
    {
      id: 4,
      icon: <FiClock className="w-6 h-6" />,
      title: "Working Hours",
      content: "Mon - Sat: 9AM - 8PM",
      subContent: "Sunday: Closed",
      gradient: "from-yellow-500 to-amber-600",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <IoLogoWhatsapp className="w-6 h-6" />,
      name: "WhatsApp",
      link: "#",
      color: "hover:bg-green-500/10 hover:border-green-500/30 hover:text-green-400",
    },
    {
      id: 2,
      icon: <IoLogoFacebook className="w-6 h-6" />,
      name: "Facebook",
      link: "#",
      color: "hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400",
    },
    {
      id: 3,
      icon: <IoLogoInstagram className="w-6 h-6" />,
      name: "Instagram",
      link: "#",
      color: "hover:bg-pink-500/10 hover:border-pink-500/30 hover:text-pink-400",
    },
    {
      id: 4,
      icon: <IoLogoTwitter className="w-6 h-6" />,
      name: "Twitter",
      link: "#",
      color: "hover:bg-sky-500/10 hover:border-sky-500/30 hover:text-sky-400",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "What documents do I need to rent a car?",
      answer: "You'll need a valid driver's license, national ID or passport, and a credit card for the security deposit.",
    },
    {
      id: 2,
      question: "What is your cancellation policy?",
      answer: "Free cancellation up to 24 hours before pickup. After that, cancellation fees may apply based on the rental duration.",
    },
    {
      id: 3,
      question: "Is insurance included in the rental price?",
      answer: "Basic insurance is included. We also offer comprehensive coverage options for additional peace of mind.",
    },
    {
      id: 4,
      question: "Can I extend my rental period?",
      answer: "Yes! Contact us at least 24 hours before your return time, and we'll arrange an extension based on availability.",
    },
  ];

  return (
    <section className="relative bg-slate-950 overflow-hidden py-20">
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
              Get In Touch
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Contact{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have questions? We're here to help! Reach out to us anytime.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, index) => (
            <div
              key={info.id}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} mb-4 shadow-lg`}>
                  {React.cloneElement(info.icon, { className: "w-6 h-6 text-slate-950" })}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-amber-400 font-semibold mb-1">
                  {info.content}
                </p>
                <p className="text-slate-500 text-sm">
                  {info.subContent}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-50"></div>

            <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <FiMessageSquare className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white">Send Message</h2>
                  <p className="text-slate-400 text-sm">We'll get back to you ASAP</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400/60 group-focus-within:text-amber-400 transition-all duration-300">
                        <FiMessageSquare size={18} />
                      </div>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/50 border border-slate-800/50 
                                 text-slate-100 placeholder-slate-600 
                                 focus:outline-none focus:border-amber-500/60 focus:bg-slate-900/70 focus:ring-2 focus:ring-amber-500/20
                                 hover:border-slate-700/50 transition-all duration-300 backdrop-blur-md"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400/60 group-focus-within:text-amber-400 transition-all duration-300">
                        <FiPhone size={18} />
                      </div>
                      <input
                        type="tel"
                        placeholder="+20 123 456 789"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/50 border border-slate-800/50 
                                 text-slate-100 placeholder-slate-600 
                                 focus:outline-none focus:border-amber-500/60 focus:bg-slate-900/70 focus:ring-2 focus:ring-amber-500/20
                                 hover:border-slate-700/50 transition-all duration-300 backdrop-blur-md"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400/60 group-focus-within:text-amber-400 transition-all duration-300">
                      <FiMail size={18} />
                    </div>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/50 border border-slate-800/50 
                               text-slate-100 placeholder-slate-600 
                               focus:outline-none focus:border-amber-500/60 focus:bg-slate-900/70 focus:ring-2 focus:ring-amber-500/20
                               hover:border-slate-700/50 transition-all duration-300 backdrop-blur-md"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider">
                    Subject
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400/60 group-focus-within:text-amber-400 transition-all duration-300">
                      <FiMessageSquare size={18} />
                    </div>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/50 border border-slate-800/50 
                               text-slate-100 placeholder-slate-600 
                               focus:outline-none focus:border-amber-500/60 focus:bg-slate-900/70 focus:ring-2 focus:ring-amber-500/20
                               hover:border-slate-700/50 transition-all duration-300 backdrop-blur-md"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="w-full p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 
                             text-slate-100 placeholder-slate-600 
                             focus:outline-none focus:border-amber-500/60 focus:bg-slate-900/70 focus:ring-2 focus:ring-amber-500/20
                             hover:border-slate-700/50 transition-all duration-300 backdrop-blur-md resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 
                           text-slate-950 rounded-xl font-black uppercase tracking-wider transition-all 
                           hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/30 
                           flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <FiSend className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* FAQ & Social */}
          <div className="space-y-8">
            {/* FAQs */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl"></div>

              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
                <h2 className="text-2xl font-black text-white mb-6">
                  Frequently Asked{" "}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Questions
                  </span>
                </h2>

                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-amber-500/30"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between"
                      >
                        <span className="font-bold text-white">{faq.question}</span>
                        <div className={`transform transition-transform duration-300 ${openFaq === faq.id ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openFaq === faq.id ? 'max-h-40' : 'max-h-0'}`}>
                        <p className="px-6 pb-4 text-slate-400 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl"></div>

              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
                <h3 className="text-xl font-black text-white mb-6">Follow Us</h3>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks?.map((social) => (
                    <a
                      key={social.id}
                      href={social.link}
                      className={`flex items-center gap-3 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl transition-all duration-300 ${social.color}`}
                    >
                      {social.icon}
                      <span className="font-semibold text-sm text-white">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl"></div>

          <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-4 overflow-hidden">
            <div className="aspect-video bg-slate-800/50 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <FiMapPin className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                <p className="text-slate-400 font-medium">Map Location</p>
                <p className="text-slate-500 text-sm">Downtown Cairo, Egypt</p>
              </div>
            </div>
          </div>
        </div>
     </div>
    </section>
  );
}