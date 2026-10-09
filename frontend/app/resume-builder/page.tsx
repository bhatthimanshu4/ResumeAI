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
  Save,
  Trash2,
  Plus,
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
import { Textarea } from '@/components/ui/textarea'
import { Logo } from '@/components/logo'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { logoutUser } from '@/store/authSlice'

const mockResume = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  linkedin: 'linkedin.com/in/johndoe',
  github: 'github.com/johndoe',
  summary: 'Frontend developer with 3+ years of experience building responsive web applications using React, TypeScript, and modern CSS frameworks.',
  skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Git'],
  experience: [
    {
      company: 'Tech Corp',
      role: 'Frontend Developer',
      period: '2022 - Present',
      description: 'Building scalable UI components and improving user experience.',
    },
  ],
  projects: [
    {
      name: 'ResumeAI',
      description: 'AI-powered ATS resume analyzer SaaS platform.',
    },
  ],
  education: {
    degree: 'BS Computer Science',
    school: 'University of California',
    period: '2018 - 2022',
  },
}

export default function ResumeBuilderPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { user } = useSelector((state: RootState) => state.auth)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  const [formData, setFormData] = useState({
    name: mockResume.name,
    email: mockResume.email,
    phone: mockResume.phone,
    location: mockResume.location,
    linkedin: mockResume.linkedin,
    github: mockResume.github,
    summary: mockResume.summary,
  })

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
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Bookmark className="h-5 w-5" />
                Saved Jobs
              </Link>
            </li>
            <li>
              <Link
                href="/resume-builder"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-green-600 bg-green-50 dark:bg-green-900/30 font-medium"
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
              <Link href="/resume-builder" className="px-3 py-2 rounded-lg text-green-600 bg-green-50 dark:bg-green-900/30 font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>
                Resume Builder
              </Link>
            </nav>
          </div>
        )}

        {/* Desktop Header */}
        <header className="hidden lg:flex h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 items-center justify-between px-6 lg:px-8">
          <div className="min-w-0">
            <div className="text-lg lg:text-xl font-bold text-slate-900 dark:text-white truncate">
              Resume Builder
            </div>
            <p className="text-xs lg:text-sm text-slate-500 dark:text-slate-400 truncate">
              Create an ATS-friendly resume inside ResumeAI
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button className="bg-green-600 hover:bg-green-700 text-white whitespace-nowrap">
              <Download className="h-4 w-4 mr-1.5" />
              Export PDF
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
            <Download className="h-3.5 w-3.5 mr-1" />
            Export PDF
          </Button>
        </div>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto w-full min-w-0">
          <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2 max-w-full">
            {/* Left Column - Form */}
            <div className="space-y-4 sm:space-y-6 min-w-0">
              {/* Resume Form */}
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full">
                <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                  <CardTitle className="text-base sm:text-lg">Personal Information</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Enter your contact details</CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="grid gap-3 sm:gap-4">
                    <div className="grid gap-1.5">
                      <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="h-10 sm:h-11 rounded-lg border-slate-300 dark:border-slate-600 w-full"
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                      <Input
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="h-10 sm:h-11 rounded-lg border-slate-300 dark:border-slate-600 w-full"
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Phone</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 123-4567"
                        className="h-10 sm:h-11 rounded-lg border-slate-300 dark:border-slate-600 w-full"
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Location</label>
                      <Input
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="San Francisco, CA"
                        className="h-10 sm:h-11 rounded-lg border-slate-300 dark:border-slate-600 w-full"
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">LinkedIn URL</label>
                      <Input
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        placeholder="linkedin.com/in/johndoe"
                        className="h-10 sm:h-11 rounded-lg border-slate-300 dark:border-slate-600 w-full"
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">GitHub URL</label>
                      <Input
                        value={formData.github}
                        onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                        placeholder="github.com/johndoe"
                        className="h-10 sm:h-11 rounded-lg border-slate-300 dark:border-slate-600 w-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Summary */}
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full">
                <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                  <CardTitle className="text-base sm:text-lg">Professional Summary</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Brief overview of your experience</CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <Textarea
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    placeholder="Write a brief summary..."
                    className="min-h-[100px] sm:min-h-[120px] rounded-lg border-slate-300 dark:border-slate-600 w-full"
                  />
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full">
                <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                  <CardTitle className="text-base sm:text-lg">Skills</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Technical skills and tools</CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {mockResume.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Input placeholder="Add a skill..." className="h-10 sm:h-11 rounded-lg border-slate-300 dark:border-slate-600 w-full" />
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full">
                <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                  <CardTitle className="text-base sm:text-lg">Experience</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Work history</CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="space-y-4">
                    {mockResume.experience.map((exp, index) => (
                      <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                        <p className="font-medium text-slate-900 dark:text-white text-sm">{exp.company}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{exp.role} • {exp.period}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="mt-3 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 w-full sm:w-auto">
                    <Plus className="h-4 w-4 mr-1.5" />
                    Add Experience
                  </Button>
                </CardContent>
              </Card>

              {/* Projects */}
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full">
                <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                  <CardTitle className="text-base sm:text-lg">Projects</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Notable projects</CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="space-y-4">
                    {mockResume.projects.map((project, index) => (
                      <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                        <p className="font-medium text-slate-900 dark:text-white text-sm">{project.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{project.description}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="mt-3 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 w-full sm:w-auto">
                    <Plus className="h-4 w-4 mr-1.5" />
                    Add Project
                  </Button>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full">
                <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                  <CardTitle className="text-base sm:text-lg">Education</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Educational background</CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                    <p className="font-medium text-slate-900 dark:text-white text-sm">{mockResume.education.degree}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{mockResume.education.school} • {mockResume.education.period}</p>
                  </div>
                  <Button variant="outline" className="mt-3 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 w-full sm:w-auto">
                    <Plus className="h-4 w-4 mr-1.5" />
                    Add Education
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Live Preview (Desktop only) */}
            <div className="hidden lg:block min-w-0">
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full sticky top-6">
                <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                  <CardTitle className="text-base sm:text-lg">Live Preview</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">{formData.name}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{formData.email} • {formData.phone}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-500">{formData.location}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Summary</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3">{formData.summary}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Skills</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {mockResume.skills.map((skill) => (
                          <span key={skill} className="text-xs text-emerald-600">{skill}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Experience</p>
                      <div className="mt-1 space-y-1">
                        {mockResume.experience.map((exp, index) => (
                          <p key={index} className="text-xs text-slate-500 dark:text-slate-500">{exp.role} at {exp.company}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Projects</p>
                      <div className="mt-1 space-y-1">
                        {mockResume.projects.map((project, index) => (
                          <p key={index} className="text-xs text-slate-500 dark:text-slate-500">{project.name}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Education</p>
                      <p className="text-xs text-slate-500 dark:text-slate-500">{mockResume.education.degree}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button variant="outline" className="flex-1 sm:flex-initial border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300">
              <Save className="h-4 w-4 mr-1.5" />
              Save Draft
            </Button>
            <Button className="flex-1 sm:flex-initial bg-green-600 hover:bg-green-700 text-white">
              <Download className="h-4 w-4 mr-1.5" />
              Export PDF
            </Button>
            <Button variant="outline" className="flex-1 sm:flex-initial border-red-200 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
              <Trash2 className="h-4 w-4 mr-1.5" />
              Clear Form
            </Button>
          </div>

          {/* Mobile Preview - Below form on mobile */}
          <div className="lg:hidden mt-6 sm:mt-8">
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full">
              <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-base sm:text-lg">Live Preview</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">{formData.name}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{formData.email} • {formData.phone}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-500">{formData.location}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">Summary</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3">{formData.summary}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">Skills</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {mockResume.skills.map((skill) => (
                        <span key={skill} className="text-xs text-emerald-600">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">Experience</p>
                    <div className="mt-1 space-y-1">
                      {mockResume.experience.map((exp, index) => (
                        <p key={index} className="text-xs text-slate-500 dark:text-slate-500">{exp.role} at {exp.company}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">Projects</p>
                    <div className="mt-1 space-y-1">
                      {mockResume.projects.map((project, index) => (
                        <p key={index} className="text-xs text-slate-500 dark:text-slate-500">{project.name}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">Education</p>
                    <p className="text-xs text-slate-500 dark:text-slate-500">{mockResume.education.degree}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}