import { SetState, create } from 'zustand'
import Image from "next/image"
import { Prisma } from "@prisma/client";
import { use, useEffect } from 'react';
import ProjectList from './ProjectList';

const LastProjects = () => {

    return (
        <section className="py-2 sm:py-12 bg-white dark:bg-black transition duration-500">
            <div className="flex justify-between flex-col md:flex-row">
                <div className="flex flex-row px-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                        <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                        <path d="M5 8h4"></path>
                        <path d="M9 16h4"></path>
                        <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"></path>
                        <path d="M14 9l4 -1"></path>
                        <path d="M16 16l3.923 -.98"></path>
                    </svg>
                    <h1 className="first-letter:text-xl text-lg font-bold">Últimos proyectos</h1>
                </div>
            </div>
            <div className="flex flex-col sm:my-4">
                <ProjectList />
            </div>
        </section>
    )
}

export default LastProjects