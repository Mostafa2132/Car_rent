"use client";

import { useState } from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { IoHeart } from "react-icons/io5";
import { GrFormNextLink } from "react-icons/gr";

import Image from "next/image";
import Link from "next/link";

export default function CarCard({ car }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);



  return (
    <div
      className="group relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-slate-800/50">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />

        {/* Image */}
        <div
          className={`relative w-full h-full transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        >
          <Image
            src={car.imageUrl}
            width={300}
            height={300}
            loading={"lazy"}
            alt={car.title}
            className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Loading skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-slate-800 animate-pulse" />
          )}
        </div>

        {/* Model year badge */}
        <div className="absolute top-4 left-4 z-20">
          <div className="px-4 py-2 bg-slate-950/80 backdrop-blur-md border border-slate-700/50 rounded-full">
            <span className="text-amber-400 font-bold text-sm">
              {car.model}
            </span>
          </div>
        </div>

        {/* Favorite button */}
        <button
          className="absolute  top-4 right-4 z-20 w-10 h-10 bg-slate-950/80 backdrop-blur-md border border-slate-700/50 rounded-full flex items-center justify-center hover:bg-slate-900 hover:border-amber-500/50 transition-all group/btn"
          aria-label="Add to favorites"
        >
          <IoHeart className="w-5 h-5 text-slate-400 group-hover/btn:text-red-500 transition-colors" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
            {car.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
            {car.description}
          </p>
        </div>

        {/* Features */}
        <div className="flex items-center space-x-4 pt-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-amber-400"
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
            <span className="text-slate-400 text-xs">Auto</span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center">
              <AiOutlineSafety className="w-4 h-4 text-amber-400" />
            </div>
            <span className="text-slate-400 text-xs">Insured</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 pt-4">
          <div className="flex items-center justify-between">
            {/* Price */}
            <div>
              <p className="text-slate-500 text-xs mb-1">Starting from</p>
              <div className="flex items-baseline space-x-1">
                <span className="text-3xl font-bold text-white">
                  ${(car.price / 30).toFixed(0)}
                </span>
                {/* <span className="text-slate-400 text-sm">/day</span>   */}
              </div>
            </div>

            {/* Rent button */}
            <Link href={`/cars/${car.title.replace(/\s+/g, '-').toLowerCase()}/${car.id}`} className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20 flex items-center space-x-2 group/rent">
              <span>Rent Now</span>
          <GrFormNextLink className="w-4 h-4 group-hover/rent:translate-x-1 transition-transform" />

            </Link>
          </div>
        </div>
      </div>

      {/* Hover effect - bottom glow */}
      <div
        className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-amber-500/20 blur-2xl rounded-full transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
