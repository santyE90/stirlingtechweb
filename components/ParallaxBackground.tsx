"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;  // 0..1
      const y = e.clientY / window.innerHeight; // 0..1

      // Small shifts (keep subtle)
      el.style.setProperty("--mx", `${x}`);
      el.style.setProperty("--my", `${y}`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    // Set a default center position
    el.style.setProperty("--mx", `0.5`);
    el.style.setProperty("--my", `0.5`);

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ref} className="parallax-bg" aria-hidden="true" />;
}
