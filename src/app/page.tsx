import Navbar from "./components/Navbar";
import PriceTicker from "./components/PriceTicker";
import Hero from "./components/Hero";
import PriceSection from "./components/PriceSection";
import AllProducts from "./components/AllProducts";
import { Suspense } from "react";
import AllProductsSkeleton from "./components/AllProductsSkeleton";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <PriceTicker />
      <Hero />
      <Suspense
        fallback={
          <div className="bg-[#f5f8f5] px-4 py-12 text-center text-gray-500">
            আজকের বাজারদর লোড হচ্ছে...
          </div>
        }
      >
        <PriceSection />
      </Suspense>

      <Suspense fallback={<AllProductsSkeleton />}>
        <AllProducts />
      </Suspense>

      <Footer />

    </main>
  );
}