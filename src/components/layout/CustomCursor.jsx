"use client"

import useMousePosition from "../../hooks/useMousePostion";

export default function CustomCursor() {
  const { x, y } = useMousePosition();

  // We hide it completely on touch devices / mobile
  // You can also detect via media query or 'pointer: coarse', but class hidden md:block is simpler

  return (
    <>
      {/* Main ring cursor */}
      <div
        className="zen-cursor hidden md:block pointer-events-none fixed z-[10000] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zen-ink w-10 h-10 transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
      />

      {/* Small dot follower (lags slightly behind) */}
      <div
        className="zen-cursor-follower hidden md:block pointer-events-none fixed z-[10000] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zen-moss w-3.5 h-3.5 transition-transform duration-[0.18s] ease-out"
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
      />
    </>
  );
}
