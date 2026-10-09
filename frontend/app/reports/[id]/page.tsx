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
  Download,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
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

const mockReport = {
  id: '1',
  resumeName: 'Frontend Developer Resume',
  jobRole: 'Frontend Developer',
  atsScore: 86,
  scoreLabel: 'Good',
  date: 'May 20, 2024',
  matchScore: 78,
  keywordsMatched: 45,
  totalKeywords: 58,
}

const scoreBreakdown = [
  { label: 'Skills Match', value: 88, color: 'bg-green-500' },
  { label: 'Keyword Match', value: 82, color: 'bg-emerald-500' },
  { label: 'Experience', value: 90, color: 'bg-green-600' },
  { label: 'Education', value: 80, color: 'bg-emerald-600' },
]

const matchedKeywords = [
  'JavaScript', 'React', 'TypeScript', 'CSS', 'HTML', 'Frontend', 'UI', 'Web', 'Development', 'Responsive'
]

const aiSuggestions = [
  'Add more specific JavaScript framework experience',
  'Include quantifiable achievements in your work history',
  'Highlight TypeScript projects more prominently',
]

const checklistItems = [
  { text: 'Resume format is ATS-friendly', done: true },
  { text: 'Keywords match job requirements', done: true },
  { text: 'Work experience is detailed', done: true },
  { text: 'Skills section is comprehensive', done: false },
]

export default function ReportDetailsPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { user } = useSelector((state: RootState) => state.auth)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
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

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  if (!mounted) return null

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
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-green-600 bg-green-50 dark:bg-green-900/30 font-medium"
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
              <Link href="/dashboard" className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 text-sm" onClick={() => setMobileMenuOpen(false)}>
                Dashboard
              </Link>
              <Link href="/analyze" className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 text-sm" onClick={() => setMobileMenuOpen(false)}>
                Analyze Resume
              </Link>
              <Link href="/reports" className="px-3 py-2 rounded-lg text-green-600 bg-green-50 dark:bg-green-900/30 font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>
                Reports
              </Link>
            </nav>
          </div>
        )}

        {/* Desktop Header */}
        <header className="hidden lg:flex h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 items-center justify-between px-6 lg:px-8">
          <div className="min-w-0">
            <h1 className="text-lg lg:text-xl font-bold text-slate-900 dark:text-white truncate">
              Report: {mockReport.resumeName}
            </h1>
            <p className="text-xs lg:text-sm text-slate-500 dark:text-slate-400 truncate">{mockReport.jobRole} • {mockReport.date}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 whitespace-nowrap">
              <Download className="h-4 w-4 mr-1.5" />
              Download PDF
            </Button>
            <div className="flex items-center gap-1 p-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 w-[72px] h-[34px]">
              <button
                onClick={setLightMode}
                className={`flex items-center justify-center rounded-lg transition-all w-[30px] h-[26px] ${theme === 'light' ? 'bg-emerald-600 text-white' : 'bg-transparent text-slate-400'}`}
              >
                <Sun className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={setDarkMode}
                className={`flex items-center justify-center rounded-lg transition-all w-[30px] h-[26px] ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-transparent text-slate-400'}`}
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

        {/* Mobile Header buttons */}
        <div className="lg:hidden px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-2">
          <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 flex-1 text-xs">
            <Download className="h-3.5 w-3.5 mr-1" />
            Download
          </Button>
        </div>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto w-full min-w-0">
          <div className="max-w-full space-y-4 sm:space-y-6">
            {/* ATS Score Card */}
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full">
              <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-base sm:text-lg">ATS Score</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Your resume scored {mockReport.atsScore}/100</CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative h-28 w-28 sm:h-32 sm:w-32">
                    <svg className="h-28 w-28 sm:h-32 sm:w-32 -rotate-90" viewBox="0 0 130 130">
                      <circle cx="65" cy="65" r="56" fill="none" stroke="#e5e7eb" className="dark:stroke-slate-600" strokeWidth="10" />
                      <circle
                        cx="65"
                        cy="65"
                        r="56"
                        fill="none"
                        stroke="#16A34A"
                        strokeWidth="10"
                        strokeDasharray={`${(mockReport.atsScore / 100) * 351.86} 351.86`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">{mockReport.atsScore}</span>
                      <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">/100</span>
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-lg sm:text-xl font-semibold text-green-700">{mockReport.scoreLabel}</p>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Your resume is {mockReport.scoreLabel.toLowerCase()} for ATS screening</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Score Breakdown */}
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full">
              <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-base sm:text-lg">Score Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-4">
                  {scoreBreakdown.map((item) => (
                    <div key={item.label} className="text-center">
                      <div className={`inline-flex items-center justify-center px-3 py-1.5 rounded-lg text-white text-sm font-semibold mb-2 ${item.color}`}>
                        {item.value}%
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">{item.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Matched Keywords */}
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full">
              <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-base sm:text-lg">Matched Keywords</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  {mockReport.keywordsMatched} of {mockReport.totalKeywords} keywords matched
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="flex flex-wrap gap-2">
                  {matchedKeywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Suggestions */}
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full">
              <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  AI Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <ul className="space-y-3">
                  {aiSuggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-green-700 dark:text-green-400">{index + 1}</span>
                      </div>
                      <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 break-words">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Checklist */}
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full">
              <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  ATS Checklist
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <ul className="space-y-3">
                  {checklistItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        item.done ? 'bg-green-100 dark:bg-green-900/30' : 'bg-slate-100 dark:bg-slate-700'
                      }`}>
                        {item.done ? (
                          <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                        ) : (
                          <AlertCircle className="h-3.5 w-3.5 text-slate-500" />
                        )}
                      </div>
                      <span className={`text-xs sm:text-sm ${
                        item.done ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'
                      } break-words`}>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}