'use client';

import Image from "next/image";
import { useEffect, useCallback, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpotlightCard from "@/components/Main Component/Products/SpotlightCard";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    skipSnaps: false,
    loop: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null);
  const isHovered = useRef(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Function to scroll to specific index
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  // Setup autoplay logic
  useEffect(() => {
    if (!emblaApi) return;

    const startAutoplay = () => {
      if (autoplayInterval.current) clearInterval(autoplayInterval.current);
      autoplayInterval.current = setInterval(() => {
        if (!isHovered.current) emblaApi.scrollNext();
      }, 2000);
    };

    const stopAutoplay = () => {
      if (autoplayInterval.current) clearInterval(autoplayInterval.current);
    };

    startAutoplay();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();

    const viewportNode = emblaApi.rootNode();
    const handleMouseEnter = () => {
      isHovered.current = true;
      stopAutoplay();
    };
    const handleMouseLeave = () => {
      isHovered.current = false;
      startAutoplay();
    };

    viewportNode.addEventListener("mouseenter", handleMouseEnter);
    viewportNode.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      stopAutoplay();
      if (viewportNode) {
        viewportNode.removeEventListener("mouseenter", handleMouseEnter);
        viewportNode.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [emblaApi, onSelect]);

  // Scroll-trigger animation for header
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
  }, []);

  const products = [
    {
      title: "Dock-RP",
      description:
        "A robust resource planning system for warehouse and logistics operations, ensuring efficiency and real-time tracking.",
      color: "red",
      image: "/images/dock-rp-image1.jpg",
      spotlight: "rgba(212, 6, 6, 0.15)" as const,
    },
    {
      title: "Shop-RP",
      description:
        "Smart retail planning software that helps manage sales, inventory, and analytics with real-time precision.",
      color: "pink",
      image: "/images/shop-rp-image1.jpg",
      spotlight: "rgba(236,72,153,0.15)" as const,
    },
    {
      title: "School-RP",
      description:
        "A complete academic resource platform for schools, simplifying scheduling, student data, and academic analytics.",
      color: "emerald",
      image: "/images/school-rp-image1.jpg",
      spotlight: "rgba(16,185,129,0.15)" as const,
    },
    {
      title: "Office-RP",
      description:
        "Corporate resource planning suite that enhances collaboration, workflow automation, and HR management.",
      color: "blue",
      image: "/images/office-rp-image1.jpg",
      spotlight: "rgba(59,130,246,0.15)" as const,
    },
  ];

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
            backgroundImage: `linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />

      {/* Header */}
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

      {/* Carousel */}
      <div className="relative w-full max-w-7xl z-10">
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            {products.map((product, i) => (
              <div
                key={i}
                className="product-card flex-[0_0_85%] sm:flex-[0_0_65%] md:flex-[0_0_50%] lg:flex-[0_0_45%] xl:flex-[0_0_35%] mx-4"
              >
                <SpotlightCard
                  spotlightColor={product.spotlight}
                  className={`group relative flex flex-col justify-between bg-[#1A1625]/80 backdrop-blur-sm rounded-2xl p-8 
                    border border-white/5 hover:border-${product.color}-400/20 
                    transition-all duration-300 hover:-translate-y-1 
                    hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)] w-full h-full`}
                >
                  <div className="flex flex-col items-start flex-1">
                    <div className="relative w-full h-40 rounded-xl overflow-hidden mb-6">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    <h3
                      className={`text-2xl font-semibold text-${product.color}-300 mb-3`}
                    >
                      {product.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed flex-grow">
                      {product.description}
                    </p>
                  </div>

                  <button
                    className={`mt-6 px-5 py-2.5 rounded-lg bg-${product.color}-400/5 text-${product.color}-300 font-medium 
                      hover:bg-${product.color}-400/10 border border-${product.color}-400/10 hover:border-${product.color}-400/20
                      transition-all duration-300 flex items-center gap-2 group/btn self-start`}
                  >
                    Learn More
                    <span className="group-hover/btn:translate-x-0.5 transition-transform text-sm">
                      →
                    </span>
                  </button>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#0F172A]/60 hover:bg-[#1E293B]/80 border border-white/10 
          p-2 rounded-full transition-all duration-300 backdrop-blur-sm disabled:opacity-30 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-cyan-300" />
        </button>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0F172A]/60 hover:bg-[#1E293B]/80 border border-white/10 
          p-2 rounded-full transition-all duration-300 backdrop-blur-sm disabled:opacity-30 z-10"
        >
          <ChevronRight className="w-6 h-6 text-cyan-300" />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-300 rounded-full ${
                index === selectedIndex
                  ? "w-8 h-2 bg-cyan-400"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}