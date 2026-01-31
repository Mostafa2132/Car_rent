import CarCard from "@/Components/CarCard/CarCard";
import axios from "axios";

export let metadata = {
  title: "Car Rental App / Brand Vehicles",
};
export default async function BrandCars({ params }) {
  const { brandName } = await params;
  const options = {
    method: "GET",
    url: `https://api-v1-pi.vercel.app/api/cars/${brandName}`,
  };
  const data = await axios.request(options);
  const cars = data.data.results;

  return (
    <>
      <div className="max-w-[84rem] mx-auto px-4 py-12">
        {/* Premium Header */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-12 md:p-16">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <p className="text-amber-500 font-semibold text-sm md:text-base uppercase tracking-widest mb-4">
                Premium Collection
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                <span className="text-amber-400">{brandName.toUpperCase()}</span> Vehicles
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-400 mx-auto mb-6"></div>
              <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
                Discover our exclusive lineup of <span className="text-amber-400">{brandName}</span> vehicles
              </p>
              
              {cars.length > 0 && (
                <div className="mt-8 inline-block">
                  <span className="bg-amber-500/20 text-amber-300 px-6 py-2 rounded-full font-semibold border border-amber-500/30">
                    {cars.length} Vehicles Available
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.length > 0 ? (
            cars.map((car) => <CarCard key={car._id} car={car} />)
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-slate-500 text-xl">
                No vehicles found for this brand
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}