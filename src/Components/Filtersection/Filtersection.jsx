"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { IoSearch, IoClose } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";

export default function FilterSection() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    title: "",
    model: "",
    color: "",
    maxPrice: "",
  });

  // Sync with URL
  useEffect(() => {
    setFilters({
      title: searchParams.get("title") || "",
      model: searchParams.get("model") || "",
      color: searchParams.get("color") || "",
      maxPrice: searchParams.get("maxPrice") || "",
    });
  }, [searchParams]);

  const years = ["2024", "2023", "2022", "2021", "2020", "2019"];
  const colors = ["Black", "White", "Red", "Blue", "Silver", "Gray"];

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams);
    
    // Update filters
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        params.set(key, filters[key]);
      } else {
        params.delete(key);
      }
    });
    
    params.set("page", "1"); // reset to page 1
    
    // Use push with scroll: false to prevent scroll to top
    router.push(`?${params.toString()}`, { scroll: false });
    setIsFilterOpen(false);
  };

  const clearFilters = () => {
    setFilters({ title: "", model: "", color: "", maxPrice: "" });
    router.push("?page=1", { scroll: false });
    setIsFilterOpen(false);
  };

  const hasActiveFilters = Object.values(filters).some((v) => v !== "");

  return (
    <div className="max-w-8xl mx-auto px-6 lg:px-12 py-8">
      {/* Search & Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <IoSearch className="w-5 h-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search by car name..."
            value={filters.title}
            onChange={(e) => handleFilterChange("title", e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && applyFilters()}
            className="w-full pl-12 pr-4 py-4 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
          />
        </div>

        {/* Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`px-6 py-4 rounded-xl font-medium text-sm transition-all flex items-center justify-center space-x-2 ${
            hasActiveFilters
              ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20"
              : "bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 text-white hover:border-amber-500/50"
          }`}
        >
          <FiFilter className="w-5 h-5" />
          <span>Filters</span>
          {hasActiveFilters && (
            <span className="w-2 h-2 bg-slate-950 rounded-full animate-pulse" />
          )}
        </button>

        {/* Apply Search */}
        <button
          onClick={applyFilters}
          className="px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20 flex items-center justify-center space-x-2"
        >
          <IoSearch className="w-5 h-5" />
          <span>Search</span>
        </button>
      </div>

      {/* Filter Panel */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isFilterOpen ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <FiFilter className="w-5 h-5 text-amber-400" />
              <span>Advanced Filters</span>
            </h3>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="w-8 h-8 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 flex items-center justify-center transition-all"
            >
              <IoClose className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Model Year */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Model Year
              </label>
              <select
                value={filters.model}
                onChange={(e) => handleFilterChange("model", e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
              >
                <option value="">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Color */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Color
              </label>
              <select
                value={filters.color}
                onChange={(e) => handleFilterChange("color", e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
              >
                <option value="">All Colors</option>
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>

            {/* Max Price */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Max Price (per day)
              </label>
              <input
                type="number"
                placeholder="e.g., 500"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={applyFilters}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
            >
              Apply Filters
            </button>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 text-white rounded-xl font-medium text-sm flex items-center justify-center space-x-2"
            >
              <IoClose className="w-5 h-5" />
              <span>Clear All</span>
            </button>
          </div>

          {hasActiveFilters && (
            <div className="mt-4 pt-4 border-t border-slate-800/50">
              <p className="text-xs text-slate-500 mb-2">Active Filters:</p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(filters).map(
                  ([key, value]) =>
                    value && (
                      <span
                        key={key}
                        className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium flex items-center space-x-2"
                      >
                        <span>
                          {key}: {value}
                        </span>
                        <button
                          onClick={() => {
                            handleFilterChange(key, "");
                            // Apply immediately after clearing individual filter
                            const newFilters = { ...filters, [key]: "" };
                            const params = new URLSearchParams(searchParams);
                            Object.keys(newFilters).forEach((k) => {
                              if (newFilters[k]) {
                                params.set(k, newFilters[k]);
                              } else {
                                params.delete(k);
                              }
                            });
                            router.push(`?${params.toString()}`, { scroll: false });
                          }}
                          className="hover:text-amber-300"
                        >
                          <IoClose className="w-3 h-3" />
                        </button>
                      </span>
                    )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}