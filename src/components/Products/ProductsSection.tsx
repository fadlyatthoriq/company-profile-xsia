'use client';

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpotlightCard from "@/components/Products/SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsSection() {
  useEffect(() => {
    gsap.fromTo(
      ".product-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".product-header",
          start: "top 80%",
        },
      }
    );

    gsap.utils.toArray<HTMLElement>(".product-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: i * 0.2, 
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="our-products"
      className="relative flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-28 
      bg-gradient-to-b from-[#170D27] via-[#1E293B] to-[#0F172A] text-white overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />

      {/* Header Section */}
      <div className="product-header relative text-center max-w-2xl mb-20 z-10">
        <h2
          className="text-4xl md:text-5xl font-bold mb-5 
          bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Our Products
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          Discover our suite of reliable and intelligent systems designed to
          streamline your business operations.
        </p>
      </div>

      {/* Cards Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full z-10">
        {/* Card 1 - Dock-RP */}
        <div className="product-card">
          <SpotlightCard
            spotlightColor="rgba(6, 182, 212, 0.15)"
            className="group relative bg-[#1A1625]/80 backdrop-blur-sm rounded-2xl p-8 
            border border-white/5 hover:border-cyan-400/20 
            transition-all duration-300 hover:-translate-y-1 
            hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)]"
          >
            <div className="flex flex-col items-start space-y-4">
              <div className="relative">
                <img
                  src="/images/dock-rp.png"
                  alt="Dock-RP"
                  className="w-16 h-16 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <h3 className="text-2xl font-semibold text-cyan-300">Dock-RP</h3>

              <p className="text-gray-400 leading-relaxed">
                A robust resource planning system for warehouse and logistics
                operations, ensuring efficiency and real-time tracking.
              </p>

              <button
                className="mt-4 px-5 py-2.5 rounded-lg bg-cyan-400/5 text-cyan-300 font-medium 
                hover:bg-cyan-400/10 border border-cyan-400/10 hover:border-cyan-400/20
                transition-all duration-300 flex items-center gap-2 group/btn"
              >
                Learn More
                <span className="group-hover/btn:translate-x-0.5 transition-transform text-sm">
                  →
                </span>
              </button>
            </div>
          </SpotlightCard>
        </div>

        {/* Card 2 - Shop-RP */}
        <div className="product-card">
          <SpotlightCard
            spotlightColor="rgba(236, 72, 153, 0.15)"
            className="group relative bg-[#1A1625]/80 backdrop-blur-sm rounded-2xl p-8 
            border border-white/5 hover:border-pink-400/20 
            transition-all duration-300 hover:-translate-y-1 
            hover:shadow-[0_8px_30px_rgba(236,72,153,0.1)]"
          >
            <div className="flex flex-col items-start space-y-4">
              <div className="relative">
                <img
                  src="/images/shop-rp.png"
                  alt="Shop-RP"
                  className="w-16 h-16 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <h3 className="text-2xl font-semibold text-pink-300">Shop-RP</h3>

              <p className="text-gray-400 leading-relaxed">
                Smart retail planning software that helps manage sales,
                inventory, and analytics with real-time precision.
              </p>

              <button
                className="mt-4 px-5 py-2.5 rounded-lg bg-pink-400/5 text-pink-300 font-medium 
                hover:bg-pink-400/10 border border-pink-400/10 hover:border-pink-400/20
                transition-all duration-300 flex items-center gap-2 group/btn"
              >
                Learn More
                <span className="group-hover/btn:translate-x-0.5 transition-transform text-sm">
                  →
                </span>
              </button>
            </div>
          </SpotlightCard>
        </div>

        {/* Card 3 - School-RP */}
        <div className="product-card">
          <SpotlightCard
            spotlightColor="rgba(16, 185, 129, 0.15)"
            className="group relative bg-[#1A1625]/80 backdrop-blur-sm rounded-2xl p-8 
            border border-white/5 hover:border-emerald-400/20 
            transition-all duration-300 hover:-translate-y-1 
            hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)]"
          >
            <div className="flex flex-col items-start space-y-4">
              <div className="relative">
                <img
                  src="/images/school-rp.png"
                  alt="School-RP"
                  className="w-16 h-16 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <h3 className="text-2xl font-semibold text-emerald-300">
                School-RP
              </h3>

              <p className="text-gray-400 leading-relaxed">
                A complete academic resource platform for schools, simplifying
                scheduling, student data, and academic analytics.
              </p>

              <button
                className="mt-4 px-5 py-2.5 rounded-lg bg-emerald-400/5 text-emerald-300 font-medium 
                hover:bg-emerald-400/10 border border-emerald-400/10 hover:border-emerald-400/20
                transition-all duration-300 flex items-center gap-2 group/btn"
              >
                Learn More
                <span className="group-hover/btn:translate-x-0.5 transition-transform text-sm">
                  →
                </span>
              </button>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
