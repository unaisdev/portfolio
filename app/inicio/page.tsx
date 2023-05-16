'use client'

import Presentation from '@/components/Presentation'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import LastProjects from '@/components/LastProjects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <main>
        <Presentation />
        <Experience />
        <LastProjects />
        <Skills />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
