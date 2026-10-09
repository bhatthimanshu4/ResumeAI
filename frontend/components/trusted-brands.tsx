"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const brandItems = [
  { src: "/logos/google.svg", alt: "Google" },
  { src: "/logos/microsoft.svg", alt: "Microsoft" },
  { src: "/logos/amazon.svg", alt: "Amazon" },
  { src: "/logos/meta.svg", alt: "Meta" },
  { src: "/logos/github.svg", alt: "GitHub" },
  { src: "/logos/linkedin.svg", alt: "LinkedIn" },
];

export default function TrustedBrands() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const renderLogoGroup = (offset: number = 0) => (
    <div
      key={offset}
      className="flex shrink-0 items-center gap-20 md:gap-24 lg:gap-28 pr-20 md:pr-24 lg:pr-28"
    >
      {brandItems.map((brand, index) => (
        <div key={index} className="shrink-0">
          <Image
            src={brand.src}
            alt={brand.alt}
            width={36}
            height={36}
            className="h-9 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section
      ref={ref}
      className="bg-white dark:bg-[#020617] py-14 sm:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-full">
        <p
          className={`mb-4 sm:mb-6 text-xs sm:text-[13px] font-semibold text-slate-700 dark:text-slate-200 text-center transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Trusted by 25,000+ job seekers and career builders
        </p>
        <div className="overflow-hidden marquee-fade-mask">
          <div
            className={`flex w-max ${
              prefersReducedMotion
                ? "justify-center flex-wrap"
                : "marquee-track hover:[animation-play-state:paused]"
            }`}
          >
            {!prefersReducedMotion && (
              <>
                {renderLogoGroup(1)}
                {renderLogoGroup(2)}
                {renderLogoGroup(3)}
                {renderLogoGroup(4)}
              </>
            )}
            {prefersReducedMotion && renderLogoGroup(0)}
          </div>
        </div>
      </div>
    </section>
  );
}