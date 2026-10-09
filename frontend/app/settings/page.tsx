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
  Save,
  Trash2,
  Shield,
  Bell as BellIcon,
  FileDown,
  AlertTriangle,
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

const mockUser = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  linkedin: 'linkedin.com/in/johndoe',
  github: 'github.com/johndoe',
  plan: 'Free Plan',
  status: 'Active',
  memberSince: 'Jan 2026',
  lastLogin: '2 days ago',
  passwordChanged: '3 months ago',
}

type TabType = 'profile' | 'security' | 'preferences' | 'danger'

export default function SettingsPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { user } = useSelector((state: RootState) => state.auth)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState<TabType>('profile')

  const [profileData, setProfileData] = useState({
    name: mockUser.name,
    email: mockUser.email,
    phone: mockUser.phone,
    location: mockUser.location,
    linkedin: mockUser.linkedin,
    github: mockUser.github,
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const [preferences, setPreferences] = useState({
    theme: 'system',
    emailNotifications: true,
    reportReminders: true,
    marketingEmails: false,
    reportFormat: 'pdf',
    language: 'en',
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

  const handleDeleteAccount = () => {
    console.log('Delete account clicked')
  }

  if (!mounted) return null

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'preferences', label: 'Preferences', icon: BellIcon },
    { id: 'danger', label: 'Danger Zone', icon: Trash2 },
  ] as const

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
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-green-600 bg-green-50 dark:bg-green-900/30 font-medium"
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
              <Link href="/settings" className="px-3 py-2 rounded-lg text-green-600 bg-green-50 dark:bg-green-900/30 font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>
                Settings
              </Link>
            </nav>
          </div>
        )}

        {/* Desktop Header */}
        <header className="hidden lg:flex h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 items-center justify-between px-6 lg:px-8">
          <div className="min-w-0">
            <div className="text-lg lg:text-xl font-bold text-slate-900 dark:text-white truncate">
              Settings
            </div>
            <p className="text-xs lg:text-sm text-slate-500 dark:text-slate-400 truncate">
              Manage your account preferences
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
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

        <main className="flex-1 p-4 sm:p-6 lg:px-8 lg:py-6 overflow-auto w-full min-w-0">
          <div className="max-w-6xl mx-auto">
            {/* Mobile Tabs - Horizontal */}
            <div className="lg:hidden flex gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 mb-4 sm:mb-6 overflow-x-auto">
              {tabs.map((tab) => {
                const TabIcon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                      activeTab === tab.id
                        ? 'bg-white dark:bg-slate-700 text-green-600 shadow-sm'
                        : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <TabIcon className="h-3.5 w-3.5" />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-[200px_1fr] max-w-full">
              {/* Desktop Tabs - Left Sidebar */}
              <div className="hidden lg:block">
                <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full">
                  <CardContent className="px-3 py-4">
                    <nav className="flex flex-col gap-1">
                      {tabs.map((tab) => {
                        const TabIcon = tab.icon
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                              activeTab === tab.id
                                ? 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                          >
                            <TabIcon className="h-4 w-4" />
                            {tab.label}
                          </button>
                        )
                      })}
                    </nav>
                  </CardContent>
                </Card>
              </div>

              {/* Settings Content */}
              <div className="space-y-4 sm:space-y-6 min-w-0">
                {/* Account Overview - Always visible at top */}
                <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full">
                  <CardContent className="px-4 sm:px-6 py-4 sm:py-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="h-14 w-14 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-white">JD</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">{mockUser.name}</h3>
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{mockUser.email}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                              {mockUser.plan}
                            </span>
                            <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                              {mockUser.status}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">Member since {mockUser.memberSince}</p>
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto whitespace-nowrap text-xs sm:text-sm">
                        Upgrade Plan
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-green-600" />
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Profile</h2>
                    </div>
                    <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full max-w-4xl">
                      <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                        <CardTitle className="text-base sm:text-lg">Basic Information</CardTitle>
                      </CardHeader>
                      <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                            <Input
                              value={profileData.name}
                              onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                              className="h-10 sm:h-11 rounded-lg border-slate-300 dark:border-slate-600 w-full"
                            />
                            <p className="text-xs text-slate-400 dark:text-slate-500">Your full name as it appears on your resume</p>
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                            <Input
                              value={profileData.email}
                              onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                              className="h-10 sm:h-11 rounded-lg border-slate-300 dark:border-slate-600 w-full"
                            />
                            <p className="text-xs text-slate-400 dark:text-slate-500">Used for notifications and login</p>
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Phone</label>
                            <Input
                              value={profileData.phone}
                              onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                              className="h-10 sm:h-11 rounded-lg border-slate-300 dark:border-slate-600 w-full"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Location</label>
                            <Input
                              value={profileData.location}
                              onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                              className="h-10 sm:h-11 rounded-lg border-slate-300 dark:border-slate-600 w-full"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">LinkedIn URL</label>
                            <Input
                              value={profileData.linkedin}
                              onChange={(e) => setProfileData({ ...profileData, linkedin: e.target.value })}
                              className="h-10 sm:h-11 rounded-lg border-slate-300 dark:border-slate-600 w-full"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">GitHub URL</label>
                            <Input
                              value={profileData.github}
                              onChange={(e) => setProfileData({ ...profileData, github: e.target.value })}
                              className="h-10 sm:h-11 rounded-lg border-slate-300 dark:border-slate-600 w-full"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                        <Save className="h-4 w-4 mr-1.5" />
                        Save Changes
                      </Button>
                      <Button variant="outline" className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 w-full sm:w-auto">
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}

                {/* Security Tab */}
                {activeTab === 'security' && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-green-600" />
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Security</h2>
                    </div>
                    <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full max-w-4xl">
                      <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                        <CardTitle className="text-base sm:text-lg">Password</CardTitle>
                        <CardDescription className="text-xs sm:text-sm">Update your password</CardDescription>
                      </CardHeader>
                      <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Current Password</label>
                            <Input
                              type="password"
                              value={passwordData.currentPassword}
                              onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                              className="h-10 sm:h-11 rounded-lg border-slate-300 dark:border-slate-600 w-full"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">New Password</label>
                            <Input
                              type="password"
                              value={passwordData.newPassword}
                              onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                              className="h-10 sm:h-11 rounded-lg border-slate-300 dark:border-slate-600 w-full"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Confirm Password</label>
                            <Input
                              type="password"
                              value={passwordData.confirmPassword}
                              onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                              className="h-10 sm:h-11 rounded-lg border-slate-300 dark:border-slate-600 w-full"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full max-w-4xl">
                      <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                        <CardTitle className="text-base sm:text-lg">Two-Factor Authentication</CardTitle>
                      </CardHeader>
                      <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-1">Status: <span className="font-medium text-slate-700 dark:text-slate-300">Not enabled</span></p>
                            <p className="text-xs text-slate-400 dark:text-slate-500">Add an extra layer of security to your account</p>
                          </div>
                          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 w-full sm:w-auto">
                            Enable 2FA
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full max-w-4xl">
                      <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                        <CardTitle className="text-base sm:text-lg">Recent Activity</CardTitle>
                      </CardHeader>
                      <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Last login</span>
                            <span className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">2 days ago</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Password changed</span>
                            <span className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">{mockUser.passwordChanged}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Active session</span>
                            <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                              Active
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Preferences Tab */}
                {activeTab === 'preferences' && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3">
                      <BellIcon className="h-5 w-5 text-green-600" />
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Preferences</h2>
                    </div>
                    <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full max-w-4xl">
                      <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                        <CardTitle className="text-base sm:text-lg">Notifications</CardTitle>
                      </CardHeader>
                      <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white mb-1">Email Notifications</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Receive important updates</p>
                            <input
                              type="checkbox"
                              checked={preferences.emailNotifications}
                              onChange={(e) => setPreferences({ ...preferences, emailNotifications: e.target.checked })}
                              className="h-5 w-5 rounded"
                            />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white mb-1">Report Reminders</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Get reminders to check reports</p>
                            <input
                              type="checkbox"
                              checked={preferences.reportReminders}
                              onChange={(e) => setPreferences({ ...preferences, reportReminders: e.target.checked })}
                              className="h-5 w-5 rounded"
                            />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white mb-1">Marketing Emails</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Receive product updates and news</p>
                            <input
                              type="checkbox"
                              checked={preferences.marketingEmails}
                              onChange={(e) => setPreferences({ ...preferences, marketingEmails: e.target.checked })}
                              className="h-5 w-5 rounded"
                            />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white mb-1">Theme Preference</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Choose your preferred theme</p>
                            <select
                              value={preferences.theme}
                              onChange={(e) => setPreferences({ ...preferences, theme: e.target.value as 'light' | 'dark' | 'system' })}
                              className="h-9 sm:h-10 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 text-xs sm:text-sm w-full"
                            >
                              <option value="system">System</option>
                              <option value="light">Light</option>
                              <option value="dark">Dark</option>
                            </select>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full max-w-4xl">
                      <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                        <CardTitle className="text-base sm:text-lg">Report Settings</CardTitle>
                      </CardHeader>
                      <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white mb-1">Default Format</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Export format for reports</p>
                            <select
                              value={preferences.reportFormat}
                              onChange={(e) => setPreferences({ ...preferences, reportFormat: e.target.value })}
                              className="h-9 sm:h-10 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 text-xs sm:text-sm w-full"
                            >
                              <option>PDF</option>
                              <option>CSV</option>
                              <option>JSON</option>
                            </select>
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white mb-1">Language</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">App interface language</p>
                            <select
                              value={preferences.language}
                              onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
                              className="h-9 sm:h-10 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 text-xs sm:text-sm w-full"
                            >
                              <option>English</option>
                              <option>Spanish</option>
                              <option>French</option>
                            </select>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Danger Zone Tab */}
                {activeTab === 'danger' && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Danger Zone</h2>
                    </div>
                    <Card className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 rounded-2xl shadow-sm w-full max-w-4xl">
                      <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                        <CardTitle className="text-base sm:text-lg text-red-700 dark:text-red-400">Delete Account</CardTitle>
                        <CardDescription className="text-xs sm:text-sm text-red-600/70 dark:text-red-400/70">
                          Permanently remove your account and all data
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                          <div>
                            <p className="text-xs sm:text-sm font-medium text-red-700 dark:text-red-400 mb-1">Irreversible action</p>
                            <p className="text-xs text-red-600/70 dark:text-red-400/70 max-w-md">
                              This will permanently delete your account, including all saved resumes, reports, and preferences.
                            </p>
                          </div>
                          <Button
                            variant="outline"
                            className="border-red-300 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 w-full sm:w-auto"
                            onClick={handleDeleteAccount}
                          >
                            Delete Account
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full max-w-4xl">
                      <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                        <CardTitle className="text-base sm:text-lg">Export Data</CardTitle>
                        <CardDescription className="text-xs sm:text-sm">Download all your data</CardDescription>
                      </CardHeader>
                      <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                            Export all your resumes, reports, and settings as a zip file.
                          </p>
                          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 w-full sm:w-auto">
                            <FileDown className="h-4 w-4 mr-1.5" />
                            Export Data
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}