'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/components/Hero/HeroSection';
import ProjectsOverviewSection from '@/components/Project/ProjectOverviewSection';
import ProductsSection from '@/components/Products/ProductsSection';
import ContactSection from '@/components/Contact/ContactSection';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // === PARALLAX SECTION ===
      gsap.utils.toArray<HTMLElement>('section[data-parallax]').forEach((section) => {
        const content = section.querySelector('.parallax-content');
        if (content) {
          gsap.fromTo(
            content,
            { y: 0 },
            {
              y: -60,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            }
          );
        }
      });

      // === REVEAL GROUPS ===
      gsap.utils.toArray<HTMLElement>('.reveal-group').forEach((group) => {
        const items = group.querySelectorAll('.reveal-item');
        gsap.fromTo(
          items,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'power3.out',
            duration: 1.1,
            stagger: 0.12,
            scrollTrigger: {
              trigger: group,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative text-[#F8FAFC] overflow-hidden">
      <HeroSection />
      <ProjectsOverviewSection />
      <ProductsSection />
      <ContactSection />
    </main>
  );
}
