'use client'

import Presentation from '@/components/Presentation'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import LastProjects from '@/components/Projects'
import Technologies from '@/components/Technologies'
import Experience from '@/components/Experience'
import { Analytics } from '@vercel/analytics/react';
import { useLocalProjectsStore } from '@/zustand/store'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  // const [populateProjects, isLoading] = useLocalProjectsStore((state) => [
  //   state.populateProjects,
  //   state.isLoading
  // ])

  // useEffect(() => {
  //   populateProjects();
  // }, [populateProjects]);


  return (
    <ThemeProvider attribute="class">
      {
        isLoading ? (
          <div className="h-screen w-screen flex flex-col justify-center bg-gray-900 items-center">
            <div className="h-12 w-12 animate-spin">
              <div className="h-full w-full border-4 border-t-purple-500 border-b-purple-700 rounded-[50%]">
              </div>

            </div>
            <div className='flex flex-col justify-center items-center py-12'>
              <h1 className="mb-2 flex font-mono text-2xl text-gray-100 md:text-6xl">
                <br className="block md:hidden" />
                <span className="relative">
                  <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                    Cargando... <span className="text-xl md:text-2xl"></span>
                  </span>
                  <span className="absolute -bottom-0 left-0 -top-1 inline-block bg-gray-900 w-full animate-type will-change">
                  </span>
                </span>
              </h1>
            </div>

          </div>
        ) : (
          <>
            <Header />
            <main>
              <Presentation />
              <Experience />
              <LastProjects />
              <Technologies skills={[]} />
            </main>
            <Footer />
            <Analytics />
          </>
        )
      }


    </ThemeProvider >
  )
}
