import SplideComp from "@/Components/SplideComp/SplideComp";

export const metadata = {
  title: "Car Rental App / Premium Brands",
};

export default function Brands() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-2">
            Featured Collections
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-amber-50 mb-4">
            Premium Brands
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto"></div>
        </div>

        {/* Brands Grid */}
        <SplideComp />
      </div>
    </section>
  );
}
