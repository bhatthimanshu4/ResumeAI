'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter()
  const { isAuthenticated, user, token } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (!isAuthenticated && !user && !token) {
      router.push('/login')
    }
  }, [isAuthenticated, user, token, router])

  if (!isAuthenticated && !user && !token) {
    return null
  }

  return <>{children}</>
}