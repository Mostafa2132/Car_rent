"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import CarCard from "@/Components/CarCard/CarCard";
import Pagination from "@/Components/Pagination/Pagination";
import FilterSection from "../Filtersection/Filtersection";
import CarCardSkeleton from "../CarCard/Carcardskeleton";

export default function MainGrid() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = Number(searchParams.get("page")) || 1;

  const [cars, setCars] = useState([]);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        params.set("page", page.toString());
        params.set("limit", "6");

        const title = searchParams.get("title");
        const model = searchParams.get("model");
        const color = searchParams.get("color");
        const maxPrice = searchParams.get("maxPrice");

        if (title) params.set("title", title);
        if (model) params.set("model", model);
        if (color) params.set("color", color);
        if (maxPrice) params.set("maxPrice", maxPrice);

        const hasFilters = title || model || color || maxPrice;
        const endpoint = hasFilters
          ? `https://api-v1-pi.vercel.app/api/cars/search?${params.toString()}`
          : `https://api-v1-pi.vercel.app/api/cars/all?${params.toString()}`;

        const { data } = await axios.get(endpoint);

        setCars(data.results);
        setInfo(data.info);
      } catch (error) {
        console.error(error);
        setCars([]);
        setInfo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [page, searchParams]);

  return (
    <>
      <FilterSection />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto px-6 lg:px-12 py-12">
          {[...Array(6)].map((_, i) => (
            <CarCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div id="main_grid" className="max-w-8xl mx-auto px-6 lg:px-12 py-12">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-slate-300 text-sm font-medium">
                {info?.count ? `${info.count} Vehicles Available` : "Our Fleet"}
              </span>
            </div>

            <h2 className="text-4xl flex items-center justify-center lg:text-5xl font-bold text-white mb-4">
              Available{" "}
              <span className="block ms-2 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Vehicles
              </span>
            </h2>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Browse our premium collection and find your perfect ride
            </p>
          </div>

          {cars.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>

              {info && <Pagination info={info} />}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 mx-auto mb-6 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-slate-500"
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
                <h3 className="text-2xl font-bold text-white mb-2">
                  No Vehicles Found
                </h3>
                <p className="text-slate-400 mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={() => router.push("?page=1", { scroll: false })}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}