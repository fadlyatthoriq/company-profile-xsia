'use client';

import Image from 'next/image';
import HeroSection from './HeroSection';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay, FiCheck } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';
import { useEffect, useState } from 'react';

type Feature = { icon: string; text: string };
type Product = {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  features: Feature[];
  advantages?: string[];
  futurePlans?: string[];
  closingLine: string;
};

// Import all icons
import {
  GiSatelliteCommunication,
  GiAnchor,
  GiCompass,
  Gi3dHammer,
  GiBrain,
} from 'react-icons/gi';
import {
  FiSettings,
  FiSmartphone,
  FiBarChart,
  FiDollarSign,
  FiFileText,
  FiPackage,
  FiSearch,
  FiUsers,
  FiMessageSquare,
} from 'react-icons/fi';
import { FaSchool, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import { MdStore } from 'react-icons/md';

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GiSatelliteCommunication,
  GiAnchor,
  GiCompass,
  Gi3dHammer,
  GiBrain,
  FiSettings,
  FiSmartphone,
  FiBarChart,
  FiDollarSign,
  FiFileText,
  FiPackage,
  FiSearch,
  FiUsers,
  FiMessageSquare,
  FiCheck,
  FaRocket,
  MdStore,
  FaSchool,
  FaUserGraduate,
  FaChalkboardTeacher,
  FiArrowRight,
  FiPlay,
};

// Render icon function
const renderIcon = (iconName: string) => {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent className="w-12 h-12" />;
};

export default function ProductClient({ product }: { product: Product }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or return a loading skeleton
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-hidden">
      <HeroSection title={product.title} subtitle={product.subtitle} />

      <section className="relative py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50">
                  <Image
                    src={product.image || '/images/image-hero.jpg'}
                    alt={product.title}
                    width={800}
                    height={600}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Overview
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {product.description}
              </p>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                Learn More
                <FiArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-24 px-6 md:px-12 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              See It In Action
            </h2>
            <p className="text-slate-400 text-lg">Watch how our system transforms operations</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-cyan-500/20 rounded-full flex items-center justify-center border-2 border-cyan-500/50 group-hover:scale-110 transition-transform cursor-pointer">
                  <FiPlay className="text-4xl text-cyan-400 ml-1" />
                </div>
                <p className="text-slate-400">Click to play demo video</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Everything you need to streamline your operations and boost productivity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <div className="text-5xl mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                    {renderIcon(feature.icon)}
                  </div>
                  <p className="text-slate-300 leading-relaxed">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {product.closingLine}
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Join hundreds of companies already using our solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-lg text-white shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                Get Started Now
                <FiArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-slate-800/50 backdrop-blur-sm rounded-xl font-bold text-lg text-slate-300 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}