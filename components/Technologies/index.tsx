import SkillList from "./SkillList"
import { useLocalStore } from "@/zustand/store"


const Technologies = () => {
    const skills = useLocalStore((state) => state.skills)

    return (
        <section className="py-4 sm:py-12 bg-white dark:bg-black transition duration-500">
            <div className="flex justify-between flex-col md:flex-row">
                <div className="flex flex-row px-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M8.5 13.5l-1.5 -1.5l1.5 -1.5"></path>
                        <path d="M15.5 10.5l1.5 1.5l-1.5 1.5"></path>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                        <path d="M13 9.5l-2 5.5"></path>
                    </svg>
                    <h1 className="first-letter:text-xl text-lg font-bold">Tecnologías</h1>
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
                    <div className="flex flex-row">
                        <p className="text-xxs flex items-center justify-end text-slate-200 font-medium">14/05/2023 a las 15:43h</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="m-2 h-4 w-4 stroke-slate-200" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M12 12l2 3"></path>
                            <path d="M12 7v5"></path>
                        </svg>
                    </div>

                </div> */}
            </div>

            <div className="flex flex-row flex-wrap justify-center divide-x-0 py-6 px-6">
                <SkillList skills={skills}/>
            </div>
        </section>
    )
}

export default Technologies