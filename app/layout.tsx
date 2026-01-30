import type { Metadata } from "next";
import "./globals.css";
import ParallaxBackground from "@/components/ParallaxBackground";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "StirlingTech",
  description: "An AI-powered platform designed to streamline workflows and make your life easier.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <ParallaxBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
