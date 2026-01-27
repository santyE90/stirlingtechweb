import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "RPeony",
  description: "Placeholder description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-cream text-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
