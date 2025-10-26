'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const contact = document.querySelector('#contact');
      if (!contact) return;

      const heading = contact.querySelectorAll('h2, p.text-lg, p.text-base');
      const contactItems = contact.querySelectorAll('.contact-item');
      const form = contact.querySelector('form');

      // === Heading fade-in (judul dan paragraf pembuka) ===
      gsap.from(heading, {
        opacity: 0,
        y: 50,
        filter: 'blur(10px)',
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: contact,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // === Contact Info Items (Phone, Email, Office, Hours) ===
      gsap.from(contactItems, {
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: contact,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      // === Form Fade-In from Right ===
      gsap.from(form, {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: form,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // === Subtle background glow pulse ===
      gsap.to('.bg-cyan-500\\/10, .bg-purple-500\\/10', {
        opacity: 0.7,
        scale: 1.05,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    });

    // Cleanup animasi & scroll triggers dengan aman
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#0F172A] via-[#1E2335] to-[#0F172A] text-gray-300"
    >
      {/* Background glow elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(6,182,212,0.25) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(6,182,212,0.25) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-base font-medium text-cyan-400 mb-3 tracking-wide uppercase">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have questions or ready to start your project? Reach out and let&apos;s build something extraordinary together.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Get in Touch
            </h3>

            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                ),
                title: 'Phone',
                text: '+1 (555) 123-4567',
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                ),
                title: 'Email',
                text: 'hello@company.com',
              },
              {
                icon: (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </>
                ),
                title: 'Office',
                text: '123 Business Ave, Suite 100\nNew York, NY 10001',
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
                title: 'Business Hours',
                text: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start contact-item">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg mr-4 shadow-md shadow-cyan-900/30">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-[#12182A] border border-white/10 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-[#12182A] border border-white/10 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="What is this regarding?"
                  className="w-full px-4 py-3 bg-[#12182A] border border-white/10 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 bg-[#12182A] border border-white/10 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-cyan-900/40"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
