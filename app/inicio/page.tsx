'use client'

import Presentation from '@/components/Presentation'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import AboutMe from '@/components/LastProjects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <main>
        <Presentation />
        <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <AboutMe />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <Skills />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
