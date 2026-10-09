'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
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
  LogOut,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react'
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { logoutUser } from '@/store/authSlice'

const mockStats = {
  totalAnalyses: 12,
  averageATSScore: 85,
  reportsGenerated: 8,
  savedJobs: 5,
};

const mockResumeReports = [
  {
    id: 1,
    resumeName: "Frontend Developer",
    atsScore: 86,
    date: "May 20, 2024",
  },
  {
    id: 2,
    resumeName: "Full Stack Developer",
    atsScore: 78,
    date: "May 18, 2024",
  },
  {
    id: 3,
    resumeName: "React Developer",
    atsScore: 92,
    date: "May 15, 2024",
  },
  {
    id: 4,
    resumeName: "UI/UX Designer",
    atsScore: 65,
    date: "May 10, 2024",
  },
];

const quickActions = [
  {
    icon: BarChart3,
    label: "Analyze Resume",
    href: "/analyze",
    color: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600",
  },
  {
    icon: BarChart3,
    label: "Compare Resume",
    href: "/compare",
    color: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
  },
  {
    icon: BarChart3,
    label: "Upload Resume",
    href: "/analyze",
    color: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600",
  },
  {
    icon: BarChart3,
    label: "View Reports",
    href: "/reports",
    color: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600",
  },
];

const mockScoreProgress = [
  { month: "Jan", score: 20 },
  { month: "Feb", score: 25 },
  { month: "Mar", score: 40 },
  { month: "Apr", score: 38 },
  { month: "May", score: 52 },
  { month: "Jun", score: 48 },
  { month: "Jul", score: 60 },
  { month: "Aug", score: 58 },
  { month: "Sep", score: 72 },
];

export default function DashboardPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { user } = useSelector((state: RootState) => state.auth)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  const handleLogout = () => {
    dispatch(logoutUser())
  }

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

  if (!mounted) return null;

  return (
    <div className="flex h-screen bg-[#F8FAFC] dark:bg-[#020617] overflow-hidden">
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
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-green-600 bg-green-50 dark:bg-green-900/30 font-medium"
              >
                <BarChart3 className="h-5 w-5" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/analyze"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
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

        <div className="px-4 py-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                {user?.name || 'John Doe'}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {user?.email || 'john@example.com'}
              </p>
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

      <div className="flex-1 flex flex-col min-w-0 w-full">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4">
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
            <button className="relative p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
              <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="absolute top-1 right-1 h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-600 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3">
            <nav className="flex flex-col gap-1.5">
              <Link href="/dashboard" className="px-3 py-2 rounded-lg text-green-600 bg-green-50 dark:bg-green-900/30 font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>
                Dashboard
              </Link>
              <Link href="/analyze" className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 text-sm" onClick={() => setMobileMenuOpen(false)}>
                Analyze Resume
              </Link>
              <Link href="/reports" className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 text-sm" onClick={() => setMobileMenuOpen(false)}>
                Reports
              </Link>
            </nav>
          </div>
        )}

        {/* Desktop Header */}
        <header className="hidden lg:flex h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 items-center justify-between px-6 lg:px-8">
          <div className="min-w-0">
            <div className="text-lg lg:text-xl font-bold text-slate-900 dark:text-white truncate">
              Dashboard Overview
            </div>
            <p className="text-xs lg:text-sm text-slate-500 dark:text-slate-400 truncate">
              Welcome back, {user?.name?.split(' ')[0] || 'John'}! 👋 Here's your career improvement summary
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
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

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto w-full min-w-0">
          {/* Stats Cards - 1 col mobile, 2 tablet, 4 desktop */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mb-6 sm:mb-8">
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm">
              <CardHeader className="pb-2 px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {mockStats.totalAnalyses}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Analyses Done</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm">
              <CardHeader className="pb-2 px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-green-600">
                  {mockStats.averageATSScore}%
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Average Score</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm">
              <CardHeader className="pb-2 px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {mockStats.reportsGenerated}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Reports Generated</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm">
              <CardHeader className="pb-2 px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {mockStats.savedJobs}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Saved Jobs</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Main Grid - Stacks on mobile, 2 cols on desktop */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2 mb-6 sm:mb-8">
            {/* Recent Analyses */}
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full min-w-0">
              <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-base sm:text-lg">Recent Analyses</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Your latest resume analyses</CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <ul className="space-y-3 sm:space-y-4">
                  {mockResumeReports.map((report) => (
                    <li
                      key={report.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700 last:border-0 last:pb-0 gap-3 sm:gap-0"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                          <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 dark:text-slate-300" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-slate-900 dark:text-white text-sm truncate">
                            {report.resumeName}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{report.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span
                          className={`inline-flex px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-medium ${
                            report.atsScore >= 80
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : report.atsScore >= 70
                                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          }`}
                        >
                          {report.atsScore}/100
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 whitespace-nowrap text-xs sm:text-sm"
                        >
                          View Report
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 sm:mt-4 text-center">
                  <Link
                    href="/reports"
                    className="text-xs sm:text-sm font-medium text-green-600 hover:underline"
                  >
                    View All
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Score Progress Chart - Theme consistent */}
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full min-w-0">
              <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-slate-900 dark:text-white text-base sm:text-lg">Score Progress</CardTitle>
              </CardHeader>
              <CardContent className="px-2 sm:px-4 pb-4 sm:pb-6">
                <div className="h-40 sm:h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={mockScoreProgress}
                      margin={{ top: 10, right: 10, left: -15, bottom: 5 }}
                    >
                      <defs>
                        <linearGradient
                          id="scoreGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#10B981"
                            stopOpacity="0.35"
                          />
                          <stop
                            offset="100%"
                            stopColor="#10B981"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        stroke={theme === 'dark' ? '#334155' : '#e5e7eb'}
                        strokeDasharray="3 3"
                        horizontal={true}
                        vertical={false}
                      />
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: theme === 'dark' ? '#94a3b8' : '#64748b' }}
                        interval={0}
                        padding={{ left: 5, right: 5 }}
                      />
                      <YAxis
                        domain={[0, 100]}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: theme === 'dark' ? '#94a3b8' : '#64748b' }}
                        ticks={[0, 100]}
                        width={20}
                      />
                      <Area
                        type="monotone"
                        dataKey="score"
                        stroke="none"
                        fill="url(#scoreGradient)"
                      />
                      <Line
                        type="monotone"
                        dataKey="score"
                        stroke="#10B981"
                        strokeWidth={2}
                        dot={{ r: 3, fill: "#10B981", strokeWidth: 0 }}
                        activeDot={{ r: 5 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions - 1 col mobile, 2 tablet, 4 desktop */}
          <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full">
            <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
              <CardTitle className="text-base sm:text-lg">Quick Actions</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Common resume tasks</CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {quickActions.map((action, index) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors gap-2"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div
                        className={`h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0 ${action.color}`}
                      >
                        <action.icon
                          className={`h-4 w-4 ${action.iconColor}`}
                        />
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white text-xs sm:text-sm truncate">{action.label}</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-slate-400 flex-shrink-0 rotate-[-90deg]" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}