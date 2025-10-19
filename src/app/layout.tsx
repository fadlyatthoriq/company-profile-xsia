import type { Metadata } from "next";
import { Exo_2, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CardNav, { CardNavItem } from "@/components/Navbar/CardNav";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const navItems: CardNavItem[] = [
  {
    label: 'Products',
    bgColor: '#1E293B',
    textColor: '#F8FAFC',
    links: [
      { label: 'Website Builder', href: '#website' },
      { label: 'E-Commerce', href: '#ecommerce' },
      { label: 'Analytics', href: '#analytics' },
    ],
  },
  {
    label: 'Solutions',
    bgColor: '#1E293B',
    textColor: '#F8FAFC',
    links: [
      { label: 'For Startups', href: '#startups' },
      { label: 'For Enterprises', href: '#enterprise' },
      { label: 'Custom Systems', href: '#custom' },
    ],
  },
  {
    label: 'Company',
    bgColor: '#1E293B',
    textColor: '#F8FAFC',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
    ],
  },
];

export const metadata: Metadata = {
  title: "xSia System - Grow Smarter, Serve Better",
  description:
    "Empowering businesses with intelligent systems and personal support that grows with you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${exo2.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-[#0D0716] text-white">
        <CardNav
          logo="/logo.png"
          logoAlt="Company Logo"
          items={navItems}
          baseColor="rgba(15, 23, 42, 0.9)"
          menuColor="rgba(255, 255, 255, 0.95)"
          buttonBgColor="rgba(0, 255, 255, 0.2)"
          buttonTextColor="#F8FAFC"
          ease="power3.out"
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
