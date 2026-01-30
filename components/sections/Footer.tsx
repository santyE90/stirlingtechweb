import Link from "next/link";
import { Button } from "@/components/ui/button";

const socials = [
  { name: "LinkedIn", href: "#" },
  { name: "GitHub", href: "https://github.com/StirlingTechInc-Inc" },
  { name: "X / Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#9e0f1a] to-[#7f0b13] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium">StirlingTech</p>
            <p className="mt-2 text-sm">
              Made with love by Santy and Rastin.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-[#C1121F]">
              <Link href="mailto:StirlingTechInc@gmail.com">
                Contact
              </Link>
            </Button>
            <Button className="bg-white text-black hover:bg-white/90">Request demo</Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm">
          </p>

          <div className="flex gap-5">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="text-sm hover:text-gray-900"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
