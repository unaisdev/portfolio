'use client'

import AboutMe from '@/components/AboutMe'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <main>
      <AboutMe />
      <AboutMe />
      <AboutMe />

      </main>
      <Footer />
    </ThemeProvider>
  )
}
