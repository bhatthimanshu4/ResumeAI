"use client";

import { Check, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [badgeVisible, setBadgeVisible] = useState(false);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [visualVisible, setVisualVisible] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setBadgeVisible(true), 100),
      setTimeout(() => setHeadingVisible(true), 250),
      setTimeout(() => setSubtitleVisible(true), 450),
      setTimeout(() => setButtonsVisible(true), 650),
      setTimeout(() => setVisualVisible(true), 900),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#020617] py-8 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="w-full">
            {/* Badge */}
            <div className={`mb-5 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/80 px-3 py-1 transition-all duration-500 ease-out ${badgeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <Check className="h-3 w-3 text-emerald-600 font-semibold" />
              <span className="text-[11px] sm:text-[12px] font-medium text-emerald-700 font-semibold">
                AI-Powered
              </span>
              <span className="text-[11px] sm:text-[12px] text-gray-400 font-semibold">•</span>
              <span className="text-[11px] sm:text-[12px] font-medium text-emerald-700 font-semibold">
                ATS Friendly
              </span>
            </div>

            {/* Heading */}
            <h1 className={`mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-tight sm:leading-[1.08] tracking-tight text-slate-900 dark:text-white transition-all duration-600 ease-out ${headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <span className="block sm:inline">Turn Your Resume</span>
              <br className="hidden sm:block" />
              <span className="text-green-700 sm:ml-0">Into Interview Calls</span>
            </h1>

            {/* Description */}
            <p className={`mb-7 max-w-full sm:max-w-md md:max-w-lg lg:max-w-[500px] text-sm sm:text-base lg:text-[17px] leading-relaxed sm:leading-[1.7] text-slate-600 dark:text-slate-300 transition-all duration-500 ease-out ${subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Upload your resume, paste a job description, and get an AI-powered
              ATS score with personalized improvement suggestions.
            </p>

            {/* CTA Buttons */}
            <div className={`mb-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full sm:w-auto transition-all duration-500 ease-out ${buttonsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <button className="inline-flex h-11 sm:h-12 items-center gap-2 rounded-lg bg-green-700 px-5 sm:px-6 text-sm font-semibold text-white hover:bg-emerald-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto justify-center sm:justify-start">
                Start Free Analysis
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex h-11 sm:h-12 items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0F172A] px-5 sm:px-6 text-sm font-semibold text-slate-800 dark:text-slate-200 transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800 w-full sm:w-auto justify-center sm:justify-start hover:scale-[1.02] active:scale-[0.98]">
                See How It Works
              </button>
            </div>

            {/* Trust badges */}
            <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 transition-all duration-500 ease-out ${buttonsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-gray-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-gray-400" />
                <span>Free 3 analyses</span>
              </div>
            </div>
          </div>

          {/* Right Content - ATS Score Card */}
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-auto mx-auto lg:mx-0">
            {/* Green background shape - hidden on mobile */}
            <div
              className="absolute -right-[120px] top-[40%] h-[500px] w-[600px] opacity-100 dark:opacity-30 hidden lg:block"
              style={{
                background:
                  "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 40%, #86efac 100%)",
                borderTopLeftRadius: "80px",
                transform: "rotate(-8deg)",
              }}
            />
            {/* Secondary lighter layer for depth - hidden on mobile */}
            <div
              className="absolute -right-[80px] top-[50%] h-[400px] w-[500px] opacity-100 dark:opacity-30 hidden lg:block"
              style={{
                background:
                  "linear-gradient(145deg, rgba(220,252,231,0.6) 0%, rgba(187,247,208,0.4) 100%)",
                borderTopLeftRadius: "60px",
                transform: "rotate(-5deg)",
              }}
            />

            <div className={`relative z-10 w-full lg:w-[330px] rounded-[18px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0F172A] p-5 lg:p-7 shadow-xl dark:shadow-black/30 transition-all duration-1000 ease-out ${visualVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <h3 className="mb-5 text-sm sm:text-[15px] font-semibold text-slate-900 dark:text-white">
                ATS Score
              </h3>

              {/* Score Circle */}
              <div className="mb-5 flex flex-col sm:flex-row items-center gap-5">
                <div className="relative h-[110px] w-[110px] sm:h-[130px] sm:w-[130px]">
                  <svg
                    className="h-[110px] w-[110px] sm:h-[130px] sm:w-[130px] -rotate-90"
                    viewBox="0 0 130 130"
                  >
                    <circle
                      cx="65"
                      cy="65"
                      r="56"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="10"
                    />
                    <circle
                      cx="65"
                      cy="65"
                      r="56"
                      fill="none"
                      stroke="#16A34A"
                      strokeWidth="10"
                      strokeDasharray={`${(85 / 100) * 351.86} 351.86`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl sm:text-[36px] font-bold text-slate-900 dark:text-white">
                      85
                    </span>
                    <span className="text-xs sm:text-[12px] text-slate-500 dark:text-slate-400">/100</span>
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-lg sm:text-[18px] font-semibold text-green-700">
                    Excellent
                  </p>
                  <p className="text-xs sm:text-[12px] text-slate-500 dark:text-slate-400">
                    You&apos;re in the top 15%
                  </p>
                </div>
              </div>

              {/* Score Breakdown */}
              <div className="space-y-3">
                {[
                  { label: "Skills Match", value: "88%" },
                  { label: "Keyword Match", value: "82%" },
                  { label: "Experience", value: "90%" },
                  { label: "Education", value: "80%" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm sm:text-[14px] text-slate-600 dark:text-slate-300">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-sm sm:text-[14px] font-semibold text-slate-900 dark:text-white">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mini Line Chart with gradient fill */}
              <div className="mt-5">
                <svg
                  className="h-[60px] sm:h-[70px] w-full max-w-full"
                  viewBox="0 0 270 70"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#16a34a"
                        stopOpacity="0.25"
                      />
                      <stop
                        offset="100%"
                        stopColor="#16a34a"
                        stopOpacity="0.02"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,50 L27,42 L54,46 L81,34 L108,38 L135,26 L162,30 L189,18 L216,22 L243,14 L270,18 L270,70 L0,70 Z"
                    fill="url(#chartGradient)"
                  />
                  <polyline
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="0,50 27,42 54,46 81,34 108,38 135,26 162,30 189,18 216,22 243,14 270,18"
                  />
                  {[
                    [0, 50], [27, 42], [54, 46], [81, 34], [108, 38],
                    [135, 26], [162, 30], [189, 18], [216, 22], [243, 14],
                    [270, 18],
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="3" fill="#16a34a" />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}