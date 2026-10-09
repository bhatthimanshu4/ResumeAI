'use client'

import './globals.css'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import LoadingScreen from '@/components/loading-screen'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white dark:bg-[#020617] text-slate-900 dark:text-white">
        <LoadingScreen />
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}