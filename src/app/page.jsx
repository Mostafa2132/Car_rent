import Hero from "@/Components/Hero/Hero";
import MainGrid from "@/Components/MainGrid/MainGrid";
import MarqueeComp from "@/Components/MarqueeComp/MarqueeComp";
import MoreInfo from "@/Components/MoreInfo/MoreInfo";

export const metadata = {
  title: "Car Rental App",
};
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <Hero />
      {/* Marquee component */}
      <MarqueeComp />
      {/* Main grid of car cards */}
      <MainGrid />
      {/* More info */}
      <MoreInfo />
    </div>
  );
}
