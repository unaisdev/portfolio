'use client'

import AboutMe from '@/components/AboutMe'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import type { AppProps } from 'next/app'
import { ThemeProvider, useTheme } from 'next-themes'
import SocialMediaButtons from '@/components/SocialMediaButtons'

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  console.log(systemTheme)
  console.log(theme)

  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen bg-gray-700 flex flex-col items-center justify-center px-10">
        {systemTheme}
        {theme}
        <h1 className="text-5xl text-white font-bold mb-8 animate-bounce text-center">
 
          Coming Soon
        </h1>
        <div className='flex'>
          <SocialMediaButtons />
        </div>
      </div>
    </ThemeProvider>
  )
}
