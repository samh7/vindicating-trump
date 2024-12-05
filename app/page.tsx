"use client";
import FeaturingSection from "@/components/FeaturingSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HomeMain from "@/components/HomeMain";
import OrderBookSection from "@/components/OrderBookSection";
import TextSection from "@/components/TextSection";

export default function Home() {
  return (
    <div
      className="w-screen overflow-x-hidden text-white
    bg-gradient-to-b  from-[rgba(0,0,0,.2)]  via-[#060717] to-[#060717]
    "
    >
      <HeroSection />
      <HomeMain />
      <FeaturingSection />
      <OrderBookSection />
      <TextSection />
      <Footer />
    </div>
  );
}
