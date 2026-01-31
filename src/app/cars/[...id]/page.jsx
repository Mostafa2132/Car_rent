import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
export const metadata = {
  title: "Car Rental App / Car Details",
};

export default async function page({ params }) {
  const brands = [
    "BMW",
    "Bugatti",
    "Dodge",
    "Jeep",
    "Ferrari",
    "Lamborghini",
    "Mercedes",
    "Porsche",
    "Tesla",
  ];

  const { id } = await params;
  // id = ['bmw-3-series', 'some-car-id']

  // استخراج اسم البراند من الـ URL
  const brandName = id[0].split("-")[0].toLowerCase();

  // البحث عن البراند بطريقة أفضل (case-insensitive)
  const brand = brands.find((b) => b.toLowerCase() === brandName);

  try {
    const options = {
      method: "GET",
      url: `https://api-v1-pi.vercel.app/api/cars/${brandName}/${id[1]}`,
    };

    const res = await axios.request(options);
    const car = res.data.car;

    return (
      <div className="min-h-screen pt-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Background decorative elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Header with back button */}
          <div className="border-b border-slate-700/50 backdrop-blur-sm bg-slate-950/50">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
              >
                <FaArrowRight className="transform rotate-180" />
                Back to Cars
              </Link>
            </div>
          </div>

          {/* Main content */}
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Image section */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 transform transition-transform duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <Image
                    width={600}
                    height={400}
                    src={car.imageUrl}
                    alt={car.title}
                    className="w-full h-96 object-cover rounded-xl relative z-10"
                  />
                </div>

                {/* Specs grid */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-4 text-center hover:bg-slate-700/50 transition-colors">
                    <div className="text-slate-400 text-sm font-medium mb-1">
                      Year
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {car.model}
                    </div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-4 text-center hover:bg-slate-700/50 transition-colors">
                    <div className="text-slate-400 text-sm font-medium mb-1">
                      Brand
                    </div>
                    <div className="text-2xl font-bold text-amber-400">
                      {brand}
                    </div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-4 text-center hover:bg-slate-700/50 transition-colors">
                    <div className="text-slate-400 text-sm font-medium mb-1">
                      ID
                    </div>
                    <div className="text-2xl font-bold text-amber-400">
                      {car.id}
                    </div>
                  </div>
                </div>
              </div>

              {/* Details section */}
              <div className="space-y-8">
                {/* Title and brand tag */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/50 rounded-full text-amber-300 text-sm font-semibold">
                      {brand}
                    </span>
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
                    {car.title}
                  </h1>
                </div>

                {/* Description */}
                <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-6">
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {car.description}
                  </p>
                </div>

                {/* Price section */}
                <div className="bg-gradient-to-r from-amber-600/20 to-amber-600/20 border border-amber-500/30 rounded-xl p-8">
                  <div className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-wider">
                    Price
                  </div>
                  <div className="text-5xl font-bold text-white mb-4">
                    ${car.price.toLocaleString()}
                  </div>
                  <div className="text-slate-400 text-sm">
                    Premium luxury vehicle with advanced features
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-4 pt-4">
                  <button className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-slate-950 font-semibold py-4 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/30">
                    Contact Dealer
                  </button>
                  <button className="flex-1 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold py-4 rounded-xl transition-all transform hover:scale-105 active:scale-95">
                    Save for Later
                  </button>
                </div>

            </div>
          </div>
                {/* Additional info */}
        <div className="w-full mt-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700/50 rounded-2xl p-8 overflow-hidden relative group">
  
  {/* Hover Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

  <div className="relative z-10">
    <div className="flex items-center gap-3 mb-8">
      <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
      <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
        Key Features
      </h3>
    </div>

    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Item */}
      <li className="flex items-start gap-4 group/item">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center group-hover/item:bg-amber-500/30 transition-all duration-300">
          <span className="w-3 h-3 bg-amber-400 rounded-full shadow-lg shadow-amber-500/50"></span>
        </div>
        <div>
          <p className="text-white font-semibold group-hover/item:text-amber-300 transition">
            Premium leather interior
          </p>
          <p className="text-slate-400 text-sm mt-1">
            Luxury crafted materials with superior comfort
          </p>
        </div>
      </li>

      <li className="flex items-start gap-4 group/item">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center group-hover/item:bg-amber-500/30 transition-all duration-300">
          <span className="w-3 h-3 bg-amber-400 rounded-full shadow-lg shadow-amber-500/50"></span>
        </div>
        <div>
          <p className="text-white font-semibold group-hover/item:text-amber-300 transition">
            Advanced safety systems
          </p>
          <p className="text-slate-400 text-sm mt-1">
            Collision detection & emergency braking
          </p>
        </div>
      </li>

      <li className="flex items-start gap-4 group/item">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center group-hover/item:bg-amber-500/30 transition-all duration-300">
          <span className="w-3 h-3 bg-amber-400 rounded-full shadow-lg shadow-amber-500/50"></span>
        </div>
        <div>
          <p className="text-white font-semibold group-hover/item:text-amber-300 transition">
            Smart connectivity
          </p>
          <p className="text-slate-400 text-sm mt-1">
            Smartphone integration & cloud services
          </p>
        </div>
      </li>

      <li className="flex items-start gap-4 group/item">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center group-hover/item:bg-amber-500/30 transition-all duration-300">
          <span className="w-3 h-3 bg-amber-400 rounded-full shadow-lg shadow-amber-500/50"></span>
        </div>
        <div>
          <p className="text-white font-semibold group-hover/item:text-amber-300 transition">
            High-performance engine
          </p>
          <p className="text-slate-400 text-sm mt-1">
            Turbocharged power with fuel efficiency
          </p>
        </div>
      </li>

    </ul>
  </div>
</div>

              </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching car:", error);
  }
}
