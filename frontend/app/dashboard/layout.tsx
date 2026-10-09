'use client'

import type { Metadata } from 'next'
// TEMP: Auth disabled for dashboard UI preview
// import ProtectedRoute from '@/components/ProtectedRoute'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // TEMP: Auth disabled for dashboard UI preview
  return <>{children}</>
}