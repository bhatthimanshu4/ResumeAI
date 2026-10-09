"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {};

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 sm:px-6 lg:px-8">
      <div className="grid w-full max-w-full rounded-2xl bg-white shadow-2xl sm:shadow-2xl grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.2fr] overflow-hidden">
        <div className="relative hidden flex-col justify-between overflow-hidden bg-cover bg-center p-6 sm:p-8 md:p-10 text-white md:flex">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('register-hero-bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-text"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
              </div>
              <span className="text-lg sm:text-xl font-semibold tracking-tight">
                ResumeAI
              </span>
            </div>
          </div>

          <div className="relative z-10 mt-6 sm:mt-8">
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              Start your journey with ResumeAI
            </h2>
            <p className="mt-2 sm:mt-3 max-w-sm text-xs sm:text-sm leading-relaxed text-emerald-100">
              Create your account and begin optimizing your resume for better
              job opportunities with AI-powered ATS analysis.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4">
              {[
                "Create ATS Optimized Resume",
                "Get AI Improvement Suggestions",
                "Track Resume Performance",
                "Increase Interview Opportunities",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-600" />
                  <span className="text-xs sm:text-sm text-emerald-50">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-6 sm:mt-8 text-xs text-emerald-200/80">
            © {new Date().getFullYear()} ResumeAI. All rights reserved.
          </div>
        </div>

        <div className="col-span-1 flex min-h-full items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="w-full max-w-full sm:max-w-md rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 md:p-7 shadow-xl md:shadow-xl">
            <div className="mb-4 sm:mb-4">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-950">
                Create Account
              </h2>
              <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-slate-500">
                Join ResumeAI and start improving your resume today.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs sm:text-sm font-medium text-slate-700"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={loading}
                  autoComplete="name"
                  className="h-10 w-full rounded-lg border-slate-300 px-3 sm:px-4 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs sm:text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  autoComplete="email"
                  className="h-10 w-full rounded-lg border-slate-300 px-3 sm:px-4 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="password"
                  className="text-xs sm:text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  autoComplete="new-password"
                  className="h-10 w-full rounded-lg border-slate-300 px-3 sm:px-4 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="confirmPassword"
                  className="text-xs sm:text-sm font-medium text-slate-700"
                >
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={loading}
                  autoComplete="new-password"
                  className="h-10 w-full rounded-lg border-slate-300 px-3 sm:px-4 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
              <Button
                type="submit"
                className="h-10 w-full rounded-lg bg-green-700 font-medium text-white hover:bg-emerald-700"
                disabled={loading}
              >
                {loading ? "Creating account..." : "Create Account"}
                <ArrowRight className="ml-1 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
            </form>

            <div className="my-4 flex items-center">
              <div className="flex-1 border-t border-slate-200" />
              <span className="mx-2 sm:mx-3 text-xs font-medium text-slate-400">
                OR
              </span>
              <div className="flex-1 border-t border-slate-200" />
            </div>

            <Button
              type="button"
              variant="outline"
              className="h-10 w-full rounded-lg border border-slate-300 bg-white py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <span className="text-base sm:text-lg font-bold text-blue-500">G</span>
              Continue with Google
            </Button>

            <p className="mt-4 text-center text-xs sm:text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-emerald-700 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
