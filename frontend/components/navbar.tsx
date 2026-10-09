"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#020617] sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-full items-center px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Left zone: Logo */}
        <div className="flex flex-1 items-center">
          <Logo size="md" href="/" />
        </div>

        {/* Center zone: Nav links - Desktop */}
        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
          <Link
            href="#features"
            className="text-[13px] font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-[13px] font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            How It Works
          </Link>
          <Link
            href="#pricing"
            className="text-[13px] font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="#docs"
            className="text-[13px] font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            Docs
          </Link>
        </nav>

        {/* Right zone: Auth Buttons - Desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="flex h-9 items-center rounded-md border font-semibold border-slate-200 dark:border-slate-700 px-4 text-[13px] font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="flex h-9 items-center rounded-md bg-emerald-600 px-5 text-[13px] font-semibold text-white hover:bg-emerald-700"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-slate-800 px-4 py-4">
          <nav className="flex flex-col gap-3">
            <Link
              href="#features"
              className="text-[15px] font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-[15px] font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-[15px] font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#docs"
              className="text-[15px] font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs
            </Link>
            <div className="flex flex-col gap-2 pt-3 border-t border-slate-200 dark:border-slate-700">
              <Link
                href="/login"
                className="flex h-10 items-center justify-center rounded-md border border-slate-200 dark:border-slate-700 text-[15px] font-medium text-slate-600 dark:text-slate-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="flex h-10 items-center justify-center rounded-md bg-emerald-600 text-[15px] font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started Free
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}