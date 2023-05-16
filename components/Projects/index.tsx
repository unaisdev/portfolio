import { SetState, create } from 'zustand'
import Image from "next/image"
import { Prisma } from "@prisma/client";
import { use, useEffect } from 'react';
import ProjectList from './components/ProjectList';

const LastProjects = () => {

    return (
        <section className="py-4 sm:py-12">
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

                {/* <div className="flex flex-col items-end justify-end pt-4">

                    <button type="button" className="flex items-center justify-end py-1.5 px-3 sm:py-2.5 sm:px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <p className="text-xs sm:text-sm flex items-center text-gray-400 font-medium">Actualizar</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-slate-400 ml-2 h-5 w-5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
                            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
                        </svg>
                    </button>
                    <div className="flex flex-row mt-2">
                        <p className="text-xxs flex items-center justify-end text-slate-200 font-medium">14/05/2023 a las 15:43h</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 stroke-slate-200" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M12 12l2 3"></path>
                            <path d="M12 7v5"></path>
                        </svg>
                    </div>

                </div> */}
            </div>
            <div className="flex flex-col sm:my-4">
                    <ProjectList />


            </div>
        </section>
    )
}

export default LastProjects