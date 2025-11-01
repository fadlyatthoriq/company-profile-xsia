'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useCallback, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SpotlightCard from "@/components/Main Component/Products/SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const isHovered = useRef(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Auto-play setup
  useEffect(() => {
    if (!emblaApi) return;

    const start = () => {
      clearInterval(autoplayRef.current!);
      autoplayRef.current = setInterval(() => {
        if (!isHovered.current) emblaApi.scrollNext();
      }, 4000);
    };

    const stop = () => clearInterval(autoplayRef.current!);

    start();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();

    const viewport = emblaApi.rootNode();
    viewport.addEventListener("mouseenter", () => {
      isHovered.current = true;
      stop();
    });
    viewport.addEventListener("mouseleave", () => {
      isHovered.current = false;
      start();
    });

    return () => {
      stop();
      viewport.removeEventListener("mouseenter", () => { });
      viewport.removeEventListener("mouseleave", () => { });
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const el = document.querySelector(".product-header");
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);

  const colorMap: Record<string, string> = {
    red: "text-red-300 bg-red-400/5 hover:bg-red-400/10 border-red-400/10 hover:border-red-400/20",
    pink: "text-pink-300 bg-pink-400/5 hover:bg-pink-400/10 border-pink-400/10 hover:border-pink-400/20",
    emerald: "text-emerald-300 bg-emerald-400/5 hover:bg-emerald-400/10 border-emerald-400/10 hover:border-emerald-400/20",
    blue: "text-blue-300 bg-blue-400/5 hover:bg-blue-400/10 border-blue-400/10 hover:border-blue-400/20",
  };

  const products = [
    {
      title: "Dock-RP",
      description: "ERP System Tailored for Shipyard Industries Keep Projects Profitable",
      color: "red",
      image: "/images/dock-rp-image1.jpg",
      spotlight: "rgba(212,6,6,0.15)",
      link: "/products/dock-rp",
    },
    {
      title: "Shop-RP",
      description: "Mini ERP for Stores, Shops, and Warehouses Simple, Fast, and Online",
      color: "pink",
      image: "/images/shop-rp-image1.jpg",
      spotlight: "rgba(236,72,153,0.15)",
      link: "/products/shop-rp",
    },
    {
      title: "School-RP",
      description: "Digital School Administration Made Simple",
      color: "emerald",
      image: "/images/school-rp-image1.jpg",
      spotlight: "rgba(16,185,129,0.15)",
      link: "/products/school-rp",
    },
    {
      title: "Vessel Tracking System",
      description: "Monitor Ship Movements in Real-Time Anytime, Anywhere",
      color: "blue",
      image: "/images/vessels-tracking-image1.jpg",
      spotlight: "rgba(59,130,246,0.15)",
      link: "/products/vessel-tracking-system",
    },
  ];

  return (
    <section
      id="our-products"
      className="relative flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-28 
      bg-gradient-to-b from-[#170D27] via-[#1E293B] to-[#0F172A] text-white overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(6,182,212,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[length:60px_60px]" />

      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />

      {/* Header */}
      <div className="product-header text-center max-w-2xl mb-20 z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Our Products
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Discover our suite of reliable and intelligent systems designed to streamline your business operations.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-7xl z-10">
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            {products.map((p, i) => (
              <div key={i} className="flex-[0_0_85%] sm:flex-[0_0_65%] md:flex-[0_0_50%] lg:flex-[0_0_45%] xl:flex-[0_0_35%] mx-4">
                <SpotlightCard
                  spotlightColor={p.spotlight}
                  className={`group bg-[#1A1625]/80 backdrop-blur-sm rounded-2xl p-8 border border-white/5 
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)] w-full h-full`}
                >
                  <div className="flex flex-col items-start flex-1">
                    <div className="relative w-full h-40 rounded-xl overflow-hidden mb-6">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    <h3 className={`text-2xl font-semibold mb-3 ${colorMap[p.color].split(" ")[0]}`}>
                      {p.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed flex-grow">{p.description}</p>
                  </div>

                  <Link href={p.link}>
                    <button className={`mt-6 px-5 py-2.5 rounded-lg font-medium border transition-all duration-300 flex items-center gap-2 group/btn self-start ${colorMap[p.color]}`}>
                      Learn More
                      <span className="group-hover/btn:translate-x-0.5 transition-transform text-sm">→</span>
                    </button>
                  </Link>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#0F172A]/60 hover:bg-[#1E293B]/80 border border-white/10 p-2 rounded-full transition-all duration-300 backdrop-blur-sm disabled:opacity-30 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-cyan-300" />
        </button>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0F172A]/60 hover:bg-[#1E293B]/80 border border-white/10 p-2 rounded-full transition-all duration-300 backdrop-blur-sm disabled:opacity-30 z-10"
        >
          <ChevronRight className="w-6 h-6 text-cyan-300" />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${i === selectedIndex ? "w-8 h-2 bg-cyan-400" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
