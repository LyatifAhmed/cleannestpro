"use client";

import { useEffect, useRef } from "react";

type HeroLensProps = {
  containerRef: React.RefObject<HTMLElement | null>;
};

export default function HeroLens({ containerRef }: HeroLensProps) {
  const lensRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -300, y: -300 });
  const current = useRef({ x: -300, y: -300 });
  const active = useRef(false);

  useEffect(() => {
    let rafId = 0;

    const handleMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      active.current = inside;
      if (!inside) return;

      target.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleLeave = () => {
      active.current = false;
    };

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.065;
      current.current.y += (target.current.y - current.current.y) * 0.065;

      if (lensRef.current) {
        lensRef.current.style.transform = `translate(${current.current.x - 90}px, ${current.current.y - 90}px)`;
        lensRef.current.style.opacity = active.current ? "1" : "0";
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
      cancelAnimationFrame(rafId);
    };
  }, [containerRef]);

  return (
    <div
      ref={lensRef}
      className="pointer-events-none absolute left-0 top-0 z-20 hidden h-[180px] w-[180px] rounded-full opacity-0 transition-opacity duration-300 md:block"
      style={{
        background:
          "radial-gradient(circle at center, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0.03) 62%, rgba(255,255,255,0.01) 100%)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1.5px solid rgba(255,255,255,0.42)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.06) inset, 0 10px 30px rgba(255,255,255,0.05)",
      }}
    >
      <div
        className="absolute inset-[10px] rounded-full"
        style={{
          border: "1px solid rgba(255,255,255,0.16)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "rgba(255,255,255,0.58)",
          boxShadow: "0 0 16px rgba(255,255,255,0.22)",
        }}
      />
    </div>
  );
}