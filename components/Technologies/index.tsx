import SkillList from "./SkillList"
import { useLocalStore } from "@/zustand/store"


const Technologies = () => {
    const skills = useLocalStore((state) => state.skills)

    return (
        <section className="py-2 sm:py-12 bg-white dark:bg-black transition duration-500">
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
            </div>
            <div className="flex flex-row flex-wrap justify-center divide-x-0 py-6 px-6">
                <SkillList showText={true} skills={skills}/>
            </div>
        </section>
    )
}

export default Technologies