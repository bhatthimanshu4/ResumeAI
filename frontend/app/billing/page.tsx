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
  Check,
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

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '₹0',
    period: '/month',
    description: 'Perfect for getting started',
    features: [
      '3 resume analyses/month',
      'Basic ATS score',
      'Limited suggestions',
    ],
    notIncluded: ['No PDF export', 'No saved jobs', 'No resume builder'],
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '₹499',
    period: '/month',
    description: 'Best for serious job seekers',
    features: [
      'Unlimited resume analyses',
      'Advanced ATS score',
      'AI suggestions',
      'PDF report export',
      'Saved jobs',
      'Resume builder',
    ],
    notIncluded: [],
    popular: true,
  },
  {
    id: 'team',
    name: 'Team',
    price: '₹1499',
    period: '/month',
    description: 'For teams and organizations',
    features: [
      'Everything in Pro',
      '5 team members',
      'Shared reports',
      'Priority support',
      'Team dashboard',
    ],
    notIncluded: [],
    popular: false,
  },
]

const usage = {
  analysesUsed: 2,
  analysesLimit: 3,
  reportsGenerated: 8,
  savedJobs: 5,
}

const paymentHistory = [
  { id: '1', plan: 'Pro Plan', amount: '₹499', status: 'Paid', date: 'Jan 2026' },
  { id: '2', plan: 'Pro Plan', amount: '₹499', status: 'Paid', date: 'Dec 2025' },
  { id: '3', plan: 'Pro Plan', amount: '₹499', status: 'Paid', date: 'Nov 2025' },
]

export default function BillingPage() {
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
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-green-600 bg-green-50 dark:bg-green-900/30 font-medium"
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
              <Link href="/billing" className="px-3 py-2 rounded-lg text-green-600 bg-green-50 dark:bg-green-900/30 font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>
                Billing
              </Link>
            </nav>
          </div>
        )}

        {/* Desktop Header */}
        <header className="hidden lg:flex h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 items-center justify-between px-6 lg:px-8">
          <div className="min-w-0">
            <div className="text-lg lg:text-xl font-bold text-slate-900 dark:text-white truncate flex items-center gap-3">
              Billing
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                Free Plan
              </span>
            </div>
            <p className="text-xs lg:text-sm text-slate-500 dark:text-slate-400 truncate">
              Manage your ResumeAI subscription
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

        {/* Mobile Header - Plan Badge */}
        <div className="lg:hidden px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Current Plan:</span>
          <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            Free Plan
          </span>
        </div>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto w-full min-w-0">
          {/* Pricing Cards */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-6 sm:mb-8">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative bg-white dark:bg-slate-800 border ${
                  plan.popular
                    ? 'border-green-600 shadow-lg'
                    : 'border-slate-200 dark:border-slate-700'
                } rounded-2xl shadow-sm w-full`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-600 text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className={`pt-6 sm:pt-8 ${plan.popular ? 'pt-8 sm:pt-10' : ''}`}>
                  <CardTitle className="text-base sm:text-lg">{plan.name}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="mb-4">
                    <span className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                    <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="h-4 w-4 flex-shrink-0 text-slate-400">—</span>
                        <span className="text-xs sm:text-sm text-slate-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.id === 'free' ? 'Current Plan' : 'Upgrade'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Current Usage */}
          <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full mb-6 sm:mb-8">
            <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
              <CardTitle className="text-base sm:text-lg">Current Usage</CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
                <div className="text-center p-3 sm:p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-1">Resume analyses</p>
                  <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {usage.analysesUsed}/{usage.analysesLimit}
                  </p>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-1">Reports generated</p>
                  <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{usage.reportsGenerated}</p>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-1">Saved jobs</p>
                  <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{usage.savedJobs}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment History */}
          <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-full">
            <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
              <CardTitle className="text-base sm:text-lg">Payment History</CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
              {/* Mobile Card View */}
              <div className="block lg:hidden space-y-3">
                {paymentHistory.map((payment) => (
                  <div key={payment.id} className="border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-slate-900 dark:text-white text-sm">{payment.plan}</span>
                      <span className="text-xs font-medium text-green-600 dark:text-green-400">{payment.status}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-400">{payment.amount}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{payment.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      <th className="px-4 py-3">Plan</th>
                      <th className="px-4 py-3">Amount</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Invoice</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentHistory.map((payment) => (
                      <tr key={payment.id} className="border-b border-slate-100 dark:border-slate-700 last:border-0">
                        <td className="px-4 py-4 font-medium text-slate-900 dark:text-white">{payment.plan}</td>
                        <td className="px-4 py-4 text-slate-600 dark:text-slate-300">{payment.amount}</td>
                        <td className="px-4 py-4">
                          <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                            {payment.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-slate-600 dark:text-slate-300">{payment.date}</td>
                        <td className="px-4 py-4">
                          <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20">
                            <Download className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                  Upgrade Plan
                </Button>
                <Button variant="outline" className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 w-full sm:w-auto">
                  Manage Subscription
                </Button>
                <Button variant="outline" className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 w-full sm:w-auto">
                  <Download className="h-4 w-4 mr-1.5" />
                  Download Invoice
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}