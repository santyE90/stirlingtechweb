"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const nav_links = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 text-white bg-gradient-to-b from-[#C1121F] to-[#9e0f1a]">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-semibold tracking-tight text-white">
          StirlingTech
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {nav_links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Button
            asChild
            variant="outline"
            className="border-white text-black hover:bg-white hover:text-[#C1121F]"
          >
            <Link href="mailto:StirlingTechInc@gmail.com">Contact</Link>
          </Button>

          <Button>Request demo</Button>
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-white/70 bg-transparent text-white hover:bg-white/10"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

<SheetContent side="right" className="w-80">
  <SheetHeader>
    <SheetTitle className="text-left">Menu</SheetTitle>
  </SheetHeader>

  <div className="mt-6 flex h-full flex-col">
    {/* Brand / mini header */}
    <div className="rounded-xl border border-black/10 bg-gray-50 p-4">
      <p className="text-sm font-semibold text-gray-900">StirlingTech</p>
      <p className="mt-1 text-xs text-gray-600">
        AI tools for modern workflows.
      </p>
    </div>

    {/* Links */}
    <nav className="mt-6 flex flex-col gap-1">
      {nav_links.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
        >
          <span>{item.label}</span>
          <span className="text-gray-400">→</span>
        </Link>
      ))}
    </nav>

    {/* Push actions to bottom */}
    <div className="mt-auto pt-6">
      <div className="h-px w-full bg-black/10" />

      <div className="mt-4 flex flex-col gap-2">
        <Button
          asChild
          size="sm"
          className="w-full bg-[#C1121F] text-white hover:bg-[#a50f1a]"
        >
          <Link href="mailto:StirlingTechInc@gmail.com">Contact</Link>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="w-full border-black/15 text-gray-900 hover:bg-gray-50"
        >
          Request demo
        </Button>
      </div>

      <p className="mt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} StirlingTech
      </p>
    </div>
  </div>
</SheetContent>

          </Sheet>
        </div>
      </div>
    </header>
  );
}
