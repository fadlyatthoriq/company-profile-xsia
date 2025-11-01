import { notFound } from 'next/navigation';
import ProductClient from '@/components/Product Component/ProductClient';

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

const products: Record<string, Product> = {
  'vessels-tracking': {
    title: 'GiSatelliteCommunication Vessel Tracking System',
    subtitle: 'Monitor Ship Movements in Real-Time — Anytime, Anywhere',
    description:
      "For over 10 years, the Vessel Tracking System has been used on the Merak–Bakauheni route to help port officers monitor vessel movements in real-time directly from their smartphones. The system provides instant visibility into each vessel's arrival, departure, sailing, maneuvering, and waiting positions, along with their respective timestamps.",
    image: '/images/vessels-tracking.jpg',
    features: [
      { icon: 'FiSmartphone', text: 'Real-time vessel tracking accessible from any mobile device' },
      { icon: 'GiAnchor', text: 'Automatic logging of vessel movements and events' },
      { icon: 'GiCompass', text: 'Trip analytics for every vessel' },
      { icon: 'FiBarChart', text: 'Access operational reports from anywhere' },
    ],
    futurePlans: [
      'AI-based congestion prediction',
      'Pattern recognition for movement optimization',
      'Smart alerts for unusual vessel behavior',
    ],
    closingLine:
      'Vessel Tracking System — transforming manual supervision into smart, data-driven operations.',
  },
  'dock-rp': {
    title: 'FiSettings Dock-Rp',
    subtitle: 'ERP System Tailored for Shipyard Industries',
    description:
      'Dock-Rp is a specialized ERP system for shipyard industries, focused on Production Planning & Control to maintain project profitability and operational efficiency.',
    image: '/images/dock-rp.jpg',
    features: [
      { icon: 'FiDollarSign', text: 'COGS tracking per project and role' },
      { icon: 'Gi3dHammer', text: 'Inventory & warehouse management with mobile audit' },
      { icon: 'FiFileText', text: 'Real-time project monitoring with photos and progress logs' },
      { icon: 'GiBrain', text: 'Smart analytics for profitability insights' },
    ],
    advantages: [
      'Built specifically for shipyards',
      'Works seamlessly on desktop & mobile',
      'Real-time transparency across branches',
    ],
    closingLine: 'Dock-Rp helps you stay in control, efficient, and profitable — every project.',
  },
  'shop-rp': {
    title: 'MdStore Shop-Rp',
    subtitle: 'Mini ERP for Stores, Shops, and Warehouses',
    description:
      'Shop-Rp is a compact inventory management system designed for small businesses who want a fast, easy, and online solution for daily stock and sales tracking.',
    image: '/images/shop-rp.jpg',
    features: [
      { icon: 'FiPackage', text: 'Manage multiple stores or warehouses' },
      { icon: 'FiSearch', text: 'Quick stock audits via mobile' },
      { icon: 'FiBarChart', text: 'Instant reports on sales & profit' },
      { icon: 'FiUsers', text: 'Multi-role access for staff' },
    ],
    closingLine:
      'Shop-Rp makes inventory management as easy as checking messages on your phone.',
  },
  'school-rp': {
    title: 'FaSchool School-Rp',
    subtitle: 'Digital School Administration Made Simple',
    description:
      'School-Rp simplifies school operations — from attendance and communication to finance and planning — all accessible online, on any device.',
    image: '/images/school-rp.jpg',
    features: [
      { icon: 'FaUserGraduate', text: 'Student and parent data management' },
      { icon: 'FaChalkboardTeacher', text: 'Teacher and staff profiles' },
      { icon: 'FiMessageSquare', text: 'Parent–school communication portal' },
      { icon: 'FiDollarSign', text: 'Digital payments & financial tracking' },
    ],
    advantages: [
      'Fully integrated digital workflow',
      'Optimized for smartphones',
      'Secure and time-saving',
    ],
    closingLine: 'School-Rp empowers schools to go fully digital — without complexity.',
  },
};

export async function generateStaticParams() {
  return [
    { slug: 'shop-rp' },
    { slug: 'dock-rp' },
    { slug: 'school-rp' },
    { slug: 'vessels-tracking' },
  ];
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products[slug];
  if (!product) return notFound();

  return <ProductClient product={product} />;
}