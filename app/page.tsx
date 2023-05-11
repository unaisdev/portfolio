'use client'

import AboutMe from '@/components/AboutMe'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import SocialMediaButtons from '@/components/SocialMediaButtons'

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-10">
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
