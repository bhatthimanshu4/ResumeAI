'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
  DownloadCloud,
  Trophy,
  CalendarClock,
  Menu,
  X,
  FileCheck,
} from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { logoutUser } from '@/store/authSlice'

const reportSummary = [
  {
    label: 'Total Reports',
    value: '8',
    icon: FileText,
    iconClass: 'text-green-600',
    iconBackground: 'bg-green-50 dark:bg-green-900/30',
  },
  {
    label: 'Best Score',
    value: '92%',
    icon: Trophy,
    iconClass: 'text-green-600',
    iconBackground: 'bg-green-50 dark:bg-green-900/30',
  },
  {
    label: 'Average Score',
    value: '85%',
    icon: BarChart3,
    iconClass: 'text-green-600',
    iconBackground: 'bg-green-50 dark:bg-green-900/30',
  },
  {
    label: 'Last Report',
    value: 'May 20, 2024',
    icon: CalendarClock,
    iconClass: 'text-green-600',
    iconBackground: 'bg-green-50 dark:bg-green-900/30',
  },
]

const mockReports = [
  {
    id: 1,
    resumeName: 'Frontend Developer Resume',
    jobRole: 'Frontend Developer',
    atsScore: '86/100',
    scoreValue: 86,
    date: 'May 20, 2024',
    status: 'Completed',
  },
  {
    id: 2,
    resumeName: 'Full Stack Resume',
    jobRole: 'Full Stack Developer',
    atsScore: '78/100',
    scoreValue: 78,
    date: 'May 18, 2024',
    status: 'Completed',
  },
  {
    id: 3,
    resumeName: 'React Developer Resume',
    jobRole: 'React Developer',
    atsScore: '92/100',
    scoreValue: 92,
    date: 'May 15, 2024',
    status: 'Completed',
  },
  {
    id: 4,
    resumeName: 'UI/UX Resume',
    jobRole: 'UI/UX Designer',
    atsScore: '65/100',
    scoreValue: 65,
    date: 'May 10, 2024',
    status: 'Needs Improvement',
  },
]

function getStatusClasses(status: string) {
  if (status === 'Completed') {
    return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
  }

  return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
}

export default function ReportsPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { user } = useSelector((state: RootState) => state.auth)
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'

    return (localStorage.getItem('theme') as 'light' | 'dark' | null) || 'light'
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const initialTheme = savedTheme || 'light'
    setTheme(initialTheme)
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  const setLightMode = () => {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    setTheme('light')
  }

  const setDarkMode = () => {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    setTheme('dark')
  }

  if (!mounted) return null

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
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <FileText className="h-5 w-5" />
                Analyze Resume
              </Link>
            </li>
            <li>
              <Link
                href="/reports"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${
                  pathname.startsWith('/reports')
                    ? 'text-green-600 bg-green-50 dark:bg-green-900/30'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
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
              <Link href="/analyze" className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300" onClick={() => setMobileMenuOpen(false)}>
                Analyze Resume
              </Link>
              <Link href="/reports" className="px-3 py-2 rounded-lg text-green-600 bg-green-50 dark:bg-green-900/30" onClick={() => setMobileMenuOpen(false)}>
                Reports
              </Link>
            </nav>
          </div>
        )}

        {/* Desktop Header */}
        <header className="hidden lg:flex h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 items-center justify-between px-8">
          <div>
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              Reports
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              View and manage your resume analysis reports.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 p-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 w-[72px] h-[34px]">
              <button
                onClick={setLightMode}
                className={`flex items-center justify-center rounded-lg transition-all w-[30px] h-[26px] ${
                  theme === 'light'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-transparent text-slate-400'
                }`}
              >
                <Sun className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={setDarkMode}
                className={`flex items-center justify-center rounded-lg transition-all w-[30px] h-[26px] ${
                  theme === 'dark'
                    ? 'bg-slate-900 text-white'
                    : 'bg-transparent text-slate-400'
                }`}
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
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6 sm:mb-8">
            {reportSummary.map((summary) => (
              <Card
                key={summary.label}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                        {summary.label}
                      </p>
                      <p className="mt-1 sm:mt-2 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {summary.value}
                      </p>
                    </div>
                    <div
                      className={`h-9 w-9 sm:h-11 sm:w-11 rounded-xl flex items-center justify-center ${summary.iconBackground}`}
                    >
                      <summary.icon
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${summary.iconClass}`}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg">Analysis Reports</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Mobile Card View */}
              <div className="block lg:hidden space-y-4">
                {mockReports.map((report) => (
                  <div key={report.id} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                          <FileText className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white text-sm">{report.resumeName}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{report.jobRole}</p>
                        </div>
                      </div>
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        report.scoreValue >= 80
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : report.scoreValue >= 70
                            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {report.atsScore}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusClasses(report.status)}`}>
                        {report.status}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{report.date}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link href="/reports/demo" className="flex-1">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 w-full"
                        >
                          View Report
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-slate-600 dark:text-slate-300 w-full sm:w-auto"
                      >
                        <DownloadCloud className="h-4 w-4 mr-1.5" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full min-w-[760px]">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      <th className="px-4 py-3">Resume Name</th>
                      <th className="px-4 py-3">Job Role</th>
                      <th className="px-4 py-3">ATS Score</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockReports.map((report) => (
                      <tr
                        key={report.id}
                        className="border-b border-slate-100 dark:border-slate-700 last:border-0"
                      >
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                              <FileText className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                            </div>
                            <span className="font-medium text-slate-900 dark:text-white">
                              {report.resumeName}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-slate-600 dark:text-slate-300">
                          {report.jobRole}
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                              report.scoreValue >= 80
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                : report.scoreValue >= 70
                                  ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                  : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                            }`}
                          >
                            {report.atsScore}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-slate-600 dark:text-slate-300">
                          {report.date}
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${getStatusClasses(
                              report.status,
                            )}`}
                          >
                            {report.status}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <Link href="/reports/demo">
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
                              >
                                View Report
                              </Button>
                            </Link>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-slate-600 dark:text-slate-300"
                            >
                              <DownloadCloud className="h-4 w-4" />
                              Download
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}