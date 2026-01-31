"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";

export default function SplideComp() {
  const brands = [
    { name: "BMW", img: "/imgs/bmw.webp" },
    { name: "Bugatti", img: "/imgs/Bugatti.webp" },
    { name: "Dodge", img: "/imgs/dodge.webp" },
    { name: "Jeep", img: "/imgs/jeep.webp" },
    { name: "Ferrari", img: "/imgs/Ferrari.webp" },
    { name: "Lamborghini", img: "/imgs/lamborghini.webp" },
    { name: "Mercedes", img: "/imgs/Mercedes.webp" },
    { name: "Porsche", img: "/imgs/Porsche.webp" },
    { name: "Tesla", img: "/imgs/Tesla.webp" },
  ];

  return (
    <div>
      {/* Carousel */}
      <Splide
        options={{
          perPage: 3,
          perMove: 1,
          gap: "2rem",
          autoplay: true,
          pauseOnHover: true,
          resetProgress: false,
          interval: 3000,
          pagination: false,
          arrows: false,
          speed: 1000,
          wheel: true,
          rewind: true,
          breakpoints: {
            1024: { perPage: 3, gap: "1.5rem" },
            768: { perPage: 2, gap: "1rem" },
            480: { perPage: 1, gap: "1rem" },
          },
        }}
      >
        {brands.map((brand) => (
          <SplideSlide key={brand.name}>
            <Link
              href={`./brands/${brand.name.toLowerCase()}`}
              className="group block h-full"
            >
              <div className="bg-slate-900 rounded-3xl p-8 shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-amber-600/20 transition-all duration-300 h-full flex flex-col items-center justify-center relative overflow-hidden border border-slate-800 group-hover:border-amber-600/50">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-amber-600/0 group-hover:from-amber-600/5 group-hover:to-amber-600/10 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <Image
                      src={brand.img}
                      alt={brand.name}
                      width={128}
                      height={128}
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-amber-50 group-hover:text-amber-500 transition-colors duration-300">
                    {brand.name}
                  </h2>
                  <div className="w-8 h-0.5 bg-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
