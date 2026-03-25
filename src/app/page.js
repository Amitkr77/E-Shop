import CuratedProducts from "@/components/CuratedProducts";
import ValuesSection from "@/components/sections/ValueSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center px-8 md:px-24 overflow-hidden pt-20">
        {/* Enso background */}
        <div className="absolute right-[-5%] top-[10%] w-[60%] h-[80%] opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full text-zinc-300">
            <path
              className="enso-path"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
            />
          </svg>
        </div>

        <div className="z-10 max-w-4xl">
          <span className="inline-block mb-4 text-xs uppercase tracking-[0.5em] text-zinc-500 animate-pulse">
            Essentials for Being
          </span>
          <h1 className="text-7xl md:text-9xl font-light leading-tight mb-8 tracking-tighter">
            Natural <br />
            <span className="italic font-serif pl-12 md:pl-32">Equilibrium</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-md mb-12 leading-relaxed">
            Designed by nature, refined for the modern ritual. Every object carries the quiet pulse of the forest.
          </p>

          <div className="flex items-center gap-8">
            <button className="px-10 py-5 bg-zinc-900 text-white text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-500 rounded-full">
              Explore Collection
            </button>
            <div className="w-12 h-px bg-zinc-300" />
            <span className="text-[10px] uppercase tracking-widest text-zinc-400">Scroll for Clarity</span>
          </div>
        </div>

        {/* Floating image */}
        <div className="absolute right-12 md:right-32 bottom-20 md:bottom-32 w-48 md:w-80 float-zen">
          <img
            src="https://images.unsplash.com/photo-1602143393494-721d0030e50f?auto=format&fit=crop&w=800&q=80"
            alt="Bamboo Bottle"
            className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 rounded-2xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-xl animate-float">
            <span className="block text-[10px] uppercase tracking-widest text-zinc-400">Featured Item</span>
            <span className="text-sm font-medium">Bamboo Vessel 01</span>
          </div>
        </div>
      </section>
      <CuratedProducts/>
      <ValuesSection />
    </>
  );
}
