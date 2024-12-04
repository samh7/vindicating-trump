"use client";
import HeroSection from "@/components/HeroSection";
import HomeMain from "@/components/HomeMain";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden">
      <HeroSection />
      <HomeMain />
      {/* <Footer/> */}
    </div>
  );
}
