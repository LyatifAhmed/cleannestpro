"use client";

import { useEffect, useState } from "react";

export default function MouseLens() {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 hidden md:block transition-opacity duration-300"
      style={{
        left: position.x - 90,
        top: position.y - 90,
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="relative h-[180px] w-[180px] rounded-full border border-white/40 bg-white/10 shadow-[0_0_50px_rgba(255,255,255,0.18)] backdrop-blur-xl">
        <div className="absolute inset-[10px] rounded-full border border-white/20" />
        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-[2px]" />
      </div>
    </div>
  );
}