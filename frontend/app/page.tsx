"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import TrustedBrands from "@/components/trusted-brands";
import ProblemSection from "@/components/problem-section";
import HowItWorks from "@/components/how-it-works";
import FeaturesSection from "@/components/features-section";
import CTABanner from "@/components/cta-banner";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustedBrands />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <CTABanner />
      <FAQSection />
      <Footer />
    </>
  );
}
