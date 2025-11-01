'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
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
  FiCheck,
} from 'react-icons/fi';
import { MdStore } from 'react-icons/md';
import {
  FaSchool,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaRocket,
} from 'react-icons/fa';

type Feature = {
  icon: string;
  text: string;
};

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
};

export default function ProductClient({ product }: { product: Product }) {
  const renderIcon = (iconName: string, className: string = 'text-5xl') => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              x: [0, 120, 0],
              y: [0, -60, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/40 to-blue-500/40 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -100, 0],
              y: [0, 80, 0],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-violet-500/40 to-purple-500/40 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-gradient-to-tr from-indigo-500/30 to-pink-500/30 rounded-full blur-2xl"
          />
          {/* Additional subtle orb */}
          <motion.div
            animate={{
              scale: [1.1, 0.9, 1.1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl"
          />
        </div>

        {/* Enhanced Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Hero Content with refined animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mb-8"
          >
           <div className="flex items-center justify-center gap-4 mb-6">
              {renderIcon(product.title.split(' ')[0], 'text-6xl md:text-8xl text-cyan-400')}
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                {product.title.split(' ').slice(1).join(' ')}
              </h1>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.9, duration: 1.2 }}
              className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto max-w-md"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-2xl md:text-3xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed"
          >
            {product.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="text-4xl text-slate-400"
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* CONTENT with Refined Bento-style Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 space-y-20">
        {/* Overview with Split Design and subtle enhancements */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-cyan-900/50 via-blue-900/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-700" />
            <motion.div
              className="relative"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Overview
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          </div>

          {/* Decorative Card with more flair */}
          <div className="bg-gradient-to-br from-slate-900/70 to-slate-800/70 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl" />
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl" />
            </div>
            <div className="relative space-y-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl mb-6"
              />
              <h3 className="text-2xl font-semibold text-slate-200">
                Innovation Meets Excellence
              </h3>
              <p className="text-slate-400">
                Experience the future of technology with cutting-edge features designed for modern needs.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Image with Refined Effect */}
        {product.image && (
          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-25 group-hover:opacity-50 transition-all duration-700" />
            <motion.div
              className="relative"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={1200}
                height={600}
                className="relative rounded-3xl shadow-2xl border border-slate-700/60 w-full"
              />
            </motion.div>
          </motion.section>
        )}

        {/* Features in Masonry-style Grid with reduced hover */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {product.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${
                  i % 3 === 0 ? 'from-cyan-900/50 to-slate-900/50' :
                  i % 3 === 1 ? 'from-blue-900/50 to-slate-900/50' :
                  'from-purple-900/50 to-slate-900/50'
                } backdrop-blur-xl border border-slate-700/60 rounded-2xl p-8 shadow-xl relative overflow-hidden group ${
                  i % 2 === 0 ? 'md:mt-8' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/10 transition-all duration-500" />
                <div className="relative">
                  <div className="mb-4">
                    {renderIcon(feature.icon)}
                  </div>
                  <p className="text-slate-200 leading-relaxed">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Advantages with Staggered Layout and reduced hover */}
        {product.advantages && (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-3xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Advantages
              </h2>
              <div className="space-y-4">
                {product.advantages.map((adv, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 bg-gradient-to-r from-slate-800/80 to-slate-800/40 border border-slate-700/60 rounded-2xl p-6 group"
                  >
                    {renderIcon('FiCheck', 'text-4xl flex-shrink-0 text-emerald-400')}
                    <p className="text-slate-200 text-lg">{adv}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Future Plans with Timeline Style and reduced hover */}
        {product.futurePlans && (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                Future Development
              </h2>
              <div className="space-y-4">
                {product.futurePlans.map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 bg-gradient-to-l from-slate-800/80 to-slate-800/40 border border-slate-700/60 rounded-2xl p-6 group"
                  >
                    <motion.span
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      className="text-4xl flex-shrink-0"
                    >
                      {renderIcon('FaRocket')}
                    </motion.span>
                    <p className="text-slate-200 text-lg">{plan}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Closing with Enhanced Spotlight Effect */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative py-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-500/15 rounded-3xl" />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl"
          />
          <div className="relative text-center px-6">
            <motion.h3
              className="text-4xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-relaxed bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent"
            >
              {product.closingLine}
            </motion.h3>
          </div>
        </motion.section>
      </div>

      {/* Footer Gradient */}
      <div className="h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </main>
  );
}
