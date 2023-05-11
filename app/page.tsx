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
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-white font-bold mb-8 animate-bounce">
          Coming Soon
        </h1>
        <p className="text-white text-lg mb-8">
          Estoy trabajando en la web, te dejo mis redes aquí abajo
        </p>
        <div className='flex'>
          <SocialMediaButtons />
        </div>
      </div>
    </ThemeProvider>
  )
}
