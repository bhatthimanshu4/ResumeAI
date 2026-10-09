"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      return () => clearTimeout(fadeTimer);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-1000 ease-in-out ${
        isAnimating ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-r from-emerald-100/40 to-green-100/30 blur-xl" />
          <div className={`transition-all duration-700 ${isAnimating ? "scale-105 opacity-0" : "scale-100 opacity-100"}`}>
            <Logo size="lg" />
          </div>
        </div>
        <p className={`text-sm text-slate-600 transition-all duration-700 ${isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
          Analyzing your next opportunity
        </p>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full bg-emerald-600 transition-all duration-300 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
              style={{
                animation: `loadingPulse 1.5s ease-in-out infinite ${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}