import { useLocalProjectsStore } from "@/zustand/store"
import { useEffect, useState } from "react"
import ProjectCard from "../ProjectCard"

const ProjectList = () => {
    // const [projects, populateProjects, isLoading] = useLocalProjectsStore((state) => [
    //     state.projects,
    //     state.populateProjects,
    //     state.isLoading
    // ])

    // useEffect(() => {
    //     populateProjects();
    // }, [populateProjects]);


    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])


    const projects = [
        {
            id: "1",
            title: "Portfolio",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, maiores quod ad ducimus dolor incidunt velit quasi reiciendis debitis amet possimus harum eum voluptate quis nulla explicabo soluta, neque error.",
            image_src: "/images/portfolio_unai_canales.webp",
            published_at: "",
            skillIds: [1, 2]
        }
    ]

    return (
        <div className="flex flex-row flex-wrap justify-center py-6 ">
            {isLoading ? (
                <div role="status" className="space-y-8 animate-pulse w-screen md:space-y-0 md:space-x-8 md:flex md:items-center">
                    <div className="flex items-center justify-center w-full h-64 bg-gray-300 dark:bg-gray-700">
                        <svg className="absolute w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                        <div className="w-full">
                            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-600 w-48 mb-4 ml-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 max-w-[480px] mb-2.5 ml-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 max-w-[480px] mb-2.5 ml-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 max-w-[440px] mb-2.5 ml-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 max-w-[460px] mb-2.5 ml-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 max-w-[360px] ml-4"></div>
                        </div>
                    </div>

                    <span className="sr-only">Loading...</span>
                </div>

            ) : (
                projects.map((project) => (
                    <ProjectCard
                        key={project.id} // Assuming the project has an `id` property
                        project={project}
                    />
                ))
            )}
        </div>
    )
}

export default ProjectList