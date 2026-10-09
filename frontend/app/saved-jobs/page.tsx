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
  Plus,
  Search,
  Trash2,
} from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Logo } from '@/components/logo'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { logoutUser } from '@/store/authSlice'

const mockSavedJobs = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'Google',
    location: 'Mountain View, CA',
    type: 'Full-time',
    status: 'Active',
    savedDate: 'May 15, 2024',
    description: 'We are looking for a Frontend Developer to join our team building the next generation of Google products...',
    skills: ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Web Development'],
  },
  {
    id: '2',
    title: 'React Developer',
    company: 'TCS',
    location: 'Bangalore, India',
    type: 'Contract',
    status: 'Active',
    savedDate: 'May 10, 2024',
    description: 'Join TCS as a React Developer to build scalable enterprise applications with modern web technologies...',
    skills: ['React', 'Redux', 'Node.js', 'REST API', 'Git'],
  },
  {
    id: '3',
    title: 'Next.js Developer',
    company: 'Startup',
    location: 'Remote',
    type: 'Part-time',
    status: 'Applied',
    savedDate: 'May 5, 2024',
    description: 'Early-stage startup seeking experienced Next.js developer to lead frontend development...',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
  {
    id: '4',
    title: 'UI Developer Intern',
    company: 'Remote Company',
    location: 'Remote',
    type: 'Internship',
    status: 'Saved',
    savedDate: 'April 28, 2024',
    description: 'Join our team as a UI Developer Intern and work on real projects to build your portfolio...',
    skills: ['Figma', 'React', 'CSS', 'UI Design', 'Prototyping'],
  },
]

function getJobTypeColor(type: string) {
  switch (type) {
    case 'Full-time':
      return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
    case 'Contract':
      return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
    case 'Part-time':
      return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
    case 'Internship':
      return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
    default:
      return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
    case 'Applied':
      return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
    case 'Saved':
      return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
    default:
      return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
  }
}

export default function SavedJobsPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { user } = useSelector((state: RootState) => state.auth)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

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
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <BarChart3 className="h-5 w-5" />
                Reports
              </Link>
            </li>
            <li>
              <Link
                href="/saved-jobs"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-green-600 bg-green-50 dark:bg-green-900/30 font-medium"
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
              <Link href="/saved-jobs" className="px-3 py-2 rounded-lg text-green-600 bg-green-50 dark:bg-green-900/30 font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>
                Saved Jobs
              </Link>
            </nav>
          </div>
        )}

        {/* Desktop Header */}
        <header className="hidden lg:flex h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 items-center justify-between px-6 lg:px-8">
          <div className="min-w-0">
            <div className="text-lg lg:text-xl font-bold text-slate-900 dark:text-white truncate">
              Saved Jobs
            </div>
            <p className="text-xs lg:text-sm text-slate-500 dark:text-slate-400 truncate">
              Manage job descriptions you want to target
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button className="bg-green-600 hover:bg-green-700 text-white whitespace-nowrap">
              <Plus className="h-4 w-4 mr-1.5" />
              Add New Job
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

        {/* Mobile Header Actions */}
        <div className="lg:hidden px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-2">
          <Button className="bg-green-600 hover:bg-green-700 text-white flex-1 text-xs">
            <Plus className="h-3.5 w-3.5 mr-1" />
            Add Job
          </Button>
        </div>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto w-full min-w-0">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-10 sm:h-11 w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <select className="h-10 sm:h-11 px-3 sm:px-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm">
              <option>All Types</option>
              <option>Full-time</option>
              <option>Contract</option>
              <option>Part-time</option>
              <option>Internship</option>
            </select>
            <select className="h-10 sm:h-11 px-3 sm:px-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm">
              <option>All Status</option>
              <option>Active</option>
              <option>Applied</option>
              <option>Saved</option>
            </select>
          </div>

          {/* Saved Job Cards */}
          {mockSavedJobs.length > 0 ? (
            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {mockSavedJobs.map((job) => (
                <Card key={job.id} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full">
                  <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <CardTitle className="text-base sm:text-lg text-slate-900 dark:text-white truncate">{job.title}</CardTitle>
                        <CardDescription className="text-xs sm:text-sm truncate">{job.company} • {job.location}</CardDescription>
                      </div>
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${getJobTypeColor(job.type)}`}>
                        {job.type}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                        {job.status}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Saved {job.savedDate}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3 break-words line-clamp-3">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {job.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 4 && (
                        <span className="inline-flex px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                          +{job.skills.length - 4} more
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 flex-1 sm:flex-initial text-xs sm:text-sm"
                      >
                        View Job Description
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 flex-1 sm:flex-initial text-xs sm:text-sm"
                      >
                        Analyze Resume
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 border-red-200 hover:bg-red-50 dark:hover:bg-red-900/20 sm:flex-initial text-xs sm:text-sm"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 sm:py-16">
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                <Bookmark className="h-8 w-8 sm:h-10 sm:w-10 text-slate-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">No saved jobs yet</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 text-center max-w-sm mb-4 sm:mb-6">
                Save job descriptions to analyze your resume against them and check how well you match.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Plus className="h-4 w-4 mr-1.5" />
                Add Your First Job
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}