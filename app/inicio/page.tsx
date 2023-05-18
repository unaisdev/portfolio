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
import { useEffect, useState, useRef } from 'react'
import { useLocalStore } from '@/zustand/store'


export default function Home() {
  const inicioRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const tecnologiesRef = useRef<HTMLDivElement | null>(null);

  const [projects, populateData, isLoading] = useLocalStore((state) => [
    state.projects,
    state.populateData,
    state.isLoading
  ])

  useEffect(() => {
    populateData();
  }, [populateData]);

  const handleScrollToInicio = () => {
    console.log("scrolling");

    const offsetTop = inicioRef?.current?.offsetTop ?? 0

    window.scrollTo({
      top: offsetTop - 80,
      behavior: 'smooth',
    });
  }

  const handleScrollToExperience = () => {
    console.log("scrolling");

    const offsetTop = experienceRef?.current?.offsetTop ?? 0

    window.scrollTo({
      top: offsetTop - 65,
      behavior: 'smooth',
    });
  }

  const handleScrollToProjects = () => {
    console.log("scrolling");

    const offsetTop = projectsRef?.current?.offsetTop ?? 0

    window.scrollTo({
      top: offsetTop - 75,
      behavior: 'smooth',
    });
  }

  const handleScrollToTechnologies = () => {
    console.log("scrolling");

    const offsetTop = tecnologiesRef?.current?.offsetTop ?? 0

    window.scrollTo({
      top: offsetTop - 65,
      behavior: 'smooth',
    });
  }

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
            <Header scrollTo={{ handleScrollToInicio, handleScrollToExperience, handleScrollToProjects, handleScrollToTechnologies }} />
            <main>
              <Presentation />
              <div ref={experienceRef}>
                <Experience />

              </div>
              <div ref={projectsRef}>
                <LastProjects />

              </div>
              <div ref={tecnologiesRef}>
                <Technologies />
              </div>
            </main>
            <Footer />
            <Analytics />
          </>
        )
      }


    </ThemeProvider >
  )
}
