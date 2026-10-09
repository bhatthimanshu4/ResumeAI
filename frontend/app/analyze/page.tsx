"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Bell,
  User,
  FileText,
  BarChart3,
  Bookmark,
  Settings,
  CreditCard,
  Upload,
  AlertCircle,
  Lightbulb,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Logo } from "@/components/logo";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { logoutUser } from "@/store/authSlice";

export default function AnalyzePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const setLightMode = () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setTheme("light");
  };

  const setDarkMode = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (!mounted) return null;

  return (
    <div className="flex h-screen bg-[#F8FAFC] dark:bg-[#020617]">
      {/* Left Sidebar - Desktop only */}
      <aside className="hidden lg:w-[260px] lg:border-r lg:border-slate-200 lg:dark:border-slate-800 lg:bg-white lg:dark:bg-[#020617] lg:flex lg:flex-col">
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800">
          <Logo size="md" href="/dashboard" />
        </div>

        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <BarChart3 className="h-5 w-5" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/analyze"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-green-600 bg-green-50 dark:bg-green-900/30 font-medium"
              >
                <FileText className="h-5 w-5" />
                Analyze Resume
              </Link>
            </li>
            <li>
              <Link
                href="/reports"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <BarChart3 className="h-5 w-5" />
                Reports
              </Link>
            </li>
            <li>
              <Link
                href="/saved-jobs"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Bookmark className="h-5 w-5" />
                Saved Jobs
              </Link>
            </li>
            <li>
              <Link
                href="/resume-builder"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <FileText className="h-5 w-5" />
                Resume Builder
              </Link>
            </li>
            <li>
              <Link
                href="/billing"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <CreditCard className="h-5 w-5" />
                Billing
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>

        <div className="px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{user?.name || "John Doe"}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{user?.email || "john@example.com"}</p>
            </div>
            <button
              onClick={handleLogout}
              className="ml-auto p-1 rounded text-slate-500 hover:text-red-600 transition-colors"
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Logo size="sm" href="/dashboard" />
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-green-600 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4">
            <nav className="flex flex-col gap-2">
              <Link href="/dashboard" className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300" onClick={() => setMobileMenuOpen(false)}>
                Dashboard
              </Link>
              <Link href="/analyze" className="px-3 py-2 rounded-lg text-green-600 bg-green-50 dark:bg-green-900/30" onClick={() => setMobileMenuOpen(false)}>
                Analyze Resume
              </Link>
              <Link href="/reports" className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300" onClick={() => setMobileMenuOpen(false)}>
                Reports
              </Link>
            </nav>
          </div>
        )}

        {/* Desktop Header */}
        <header className="hidden lg:flex h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 items-center justify-between px-8">
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Analyze Your Resume</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Upload and get AI-powered insights</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 p-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 w-[72px] h-[34px]">
              <button
                onClick={setLightMode}
                className={`flex items-center justify-center rounded-lg transition-all w-[30px] h-[26px] ${theme === "light" ? "bg-emerald-600 text-white" : "bg-transparent text-slate-400"}`}
              >
                <Sun className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={setDarkMode}
                className={`flex items-center justify-center rounded-lg transition-all w-[30px] h-[26px] ${theme === "dark" ? "bg-slate-900 text-white" : "bg-transparent text-slate-400"}`}
              >
                <Moon className="h-3.5 w-3.5" />
              </button>
            </div>
            <button className="relative p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-green-600 rounded-full"></span>
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          <div className="max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-full">
              <CardHeader>
                <CardTitle>Upload Resume</CardTitle>
                <CardDescription>PDF, DOCX, or TXT files supported</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-6 sm:p-12 text-center hover:border-green-400 dark:hover:border-green-500 transition-colors cursor-pointer">
                  <Upload className="h-10 w-10 sm:h-12 sm:w-12 text-slate-400 mx-auto mb-3 sm:mb-4" />
                  <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Drag and drop your resume here
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 sm:mb-4">
                    Or click to browse files
                  </p>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 w-full sm:w-auto">
                    Choose File
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-full">
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
                <CardDescription>Paste the job description you're targeting</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Paste the job description here..."
                  className="min-h-[120px] sm:min-h-[150px] bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 w-full"
                />
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto px-6 sm:px-8">
                Analyze Resume
              </Button>
            </div>

            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  Tips for Better Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 break-words">
                      Use the exact job description you&apos;re targeting for the most accurate ATS score
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 break-words">
                      Ensure your resume is updated with recent experience and skills
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 break-words">
                      Include relevant keywords and quantify achievements where possible
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}