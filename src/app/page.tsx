'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/components/Hero/HeroSection';
import ProjectsOverviewSection from '@/components/Project/ProjectOverviewSection';
import GallerySection from '@/components/Gallery/GalleryComponent';

import SmoothScrollProvider from '@/components/SmoothScrollProvider';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  /* ===========================================================
   * ⚙️ SCROLL ANIMATIONS
   * =========================================================== */
  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.to('#projects-overview .parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: '#projects-overview',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.to('.float-element', {
        y: -15,
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);
  

  return (
    <SmoothScrollProvider>
      <main className="relative bg-[#0F172A] text-[#F8FAFC] overflow-hidden">
        <HeroSection />
        <ProjectsOverviewSection />
        <GallerySection />
      </main>
    </SmoothScrollProvider>
  );
}
