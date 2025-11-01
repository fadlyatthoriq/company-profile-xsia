'use client';

import Image from 'next/image';
import HeroSection from './HeroSection';
import VideoSection from './VideoSection';

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

export default function ProductClient({ product }: { product: Product }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-hidden">
      <HeroSection title={product.title} subtitle={product.subtitle} />

      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <div>
          <Image
            src={product.image || '/images/image-hero.jpg'}
            alt={product.title}
            width={600}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-lg mb-6">{product.description}</p>
        </div>
      </div>
      <VideoSection src="https://www.youtube.com/embed/VIDEO_ID" height="360" />
      
      {/* Section Features */}
      <div className="py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.features.map((feature, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{feature.text}</h3>
            </div>
          ))}
        </div>
      </div>
      
      {/* Section Benefits */}
      <div className="py-16 px-8 bg-slate-900">
        <h2 className="text-4xl font-bold text-center mb-12">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {product.advantages?.map((advantage, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg">{advantage}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Section Key Features */}
      <div className="py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {product.features.slice(0, 4).map((feature, index) => (  // Assuming keyFeatures are part of features, adjust if needed
            <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.text}</h3>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 px-8 bg-slate-900 text-center">
        <h2 className="text-4xl font-bold mb-4">{product.closingLine}</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
          Get Started
        </button>
      </div>
    </main>
  );
}
