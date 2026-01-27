import Link from "next/link";
import { Button } from "@/components/ui/button";

const nav_links = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 text-white bg-gradient-to-b from-[#C1121F] to-[#9e0f1a]">
      <div className="mx-auto max-w-6xl px-6 py-10 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-white">
          RPeony
        </Link>

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
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-white text-black hover:bg-white hover:text-[#C1121F]">
            Contact
          </Button>
          <Button>Request demo</Button>
        </div>
      </div>
    </header>
  );
}
