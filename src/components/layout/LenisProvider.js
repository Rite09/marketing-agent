"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
      stopInertiaOnNavigate: true,
    });
    lenisRef.current = lenis;

    return () => {
      lenisRef.current = null;
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;

    if (!lenis) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      lenis.resize();
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname]);

  return children;
}
