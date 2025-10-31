'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = 'rgba(17, 24, 39, 0.8)', // semi transparan dark slate bg
  menuColor = '#e2e8f0',
  buttonBgColor = 'linear-gradient(135deg, #4F46E5, #06B6D4)',
  buttonTextColor = '#fff'
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const createTimeline = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return null;

    const calculateHeight = () => {
      const navEl = navRef.current;
      if (!navEl) return 260;

      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (isMobile) {
        const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
        if (contentEl) {
          const prev = {
            visibility: contentEl.style.visibility,
            pointerEvents: contentEl.style.pointerEvents,
            position: contentEl.style.position,
            height: contentEl.style.height,
          };

          contentEl.style.visibility = 'visible';
          contentEl.style.pointerEvents = 'auto';
          contentEl.style.position = 'static';
          contentEl.style.height = 'auto';

          const contentHeight = contentEl.scrollHeight;

          Object.assign(contentEl.style, prev);
          return 60 + contentHeight + 16;
        }
      }

      return 270;
    };

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 40, opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(navEl, { height: calculateHeight, duration: 0.4, ease });
    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  }, [ease]);



  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [createTimeline]);



  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[850px] z-[99] top-[1rem] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} h-[60px] backdrop-blur-xl border border-slate-700/40 rounded-2xl shadow-[0_0_25px_rgba(79,70,229,0.2)] transition-all duration-300`}
        style={{
          background: baseColor,
        }}
      >
        {/* === Top Bar === */}
        <div className="card-nav-top flex items-center justify-between h-[60px] px-4">
          {/* Hamburger */}
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} flex flex-col gap-[6px] cursor-pointer z-[3]`}
            onClick={toggleMenu}
            style={{ color: menuColor }}
          >
            <div
              className={`w-[28px] h-[2px] bg-current transition-all duration-300 ${isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
                }`}
            />
            <div
              className={`w-[28px] h-[2px] bg-current transition-all duration-300 ${isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
                }`}
            />
          </div>

          {/* Logo */}
          <div className="flex items-center absolute left-1/2 -translate-x-1/2">
            <Image
              src={logo}
              alt={logoAlt}
              width={0}
              height={0}
              sizes="100vw"
              style={{ height: "28px", width: "auto" }}
              className="brightness-110 drop-shadow-[0_0_6px_rgba(79,70,229,0.6)]"
              priority
            />
          </div>

          {/* CTA */}
          <Link
            className="hidden md:inline-flex items-center justify-center px-4 h-[40px] rounded-xl font-semibold text-sm tracking-wide"
            style={{
              background: buttonBgColor,
              color: buttonTextColor,
              boxShadow: '0 0 10px rgba(6,182,212,0.3)'
            }}
            href='/#projects-overview'
          >
            Get Started
          </Link>
        </div>

        {/* === Dropdown Content === */}
        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] p-4 transition-all duration-500 ${isExpanded ? 'visible opacity-100' : 'invisible opacity-0'
            }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(items || []).slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                ref={setCardRef(idx)}
                className="nav-card group flex flex-col p-5 rounded-2xl backdrop-blur-md border border-slate-600/40 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.25)] hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: `linear-gradient(145deg, ${item.bgColor}, rgba(15,23,42,0.7))`,
                  color: item.textColor
                }}
              >
                <div className="nav-card-label text-xl font-semibold tracking-tight mb-4 pb-3 border-b border-slate-600/30">
                  {item.label}
                </div>
                <div className="nav-card-links flex flex-col gap-2">
                  {item.links.map((lnk, i) => (
                    <Link
                      key={i}
                      href={lnk.href}
                      aria-label={lnk.ariaLabel}
                      className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 hover:translate-x-1 transition-all duration-200 group/link"
                      onClick={() => {
                        const tl = tlRef.current;
                        if (tl) {
                          tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
                          tl.reverse();
                        }
                        setIsHamburgerOpen(false);
                      }}
                    >
                      <GoArrowUpRight className="text-base opacity-70 group-hover/link:opacity-100" />
                      <span className="font-medium">{lnk.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
