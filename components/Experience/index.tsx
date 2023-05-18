import { useLocalStore } from "@/zustand/store"
import SkillList from "../Technologies/SkillList"
import JobList from "./JobList"

const Experience = () => {
    return (
        <section className="py-8 sm:py-12 px-6 bg-white dark:bg-black transition duration-500">
            <div className="flex justify-around flex-col">
                <div className="flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z"></path>
                        <path d="M6.161 17.009l11.839 -.009"></path>
                    </svg>
                    <h1 className="first-letter:text-xl text-lg font-bold">Experiencia</h1>
                </div>
             

                <JobList />


            </div>

        </section>
    )
}

export default Experience