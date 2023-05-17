import { useEffect, useState } from "react"
import ProjectCard from "../ProjectCard"

const ProjectList = () => {
    // const projects = useLocalProjectsStore((state) => 
    //     state.projects
    // )

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
        <div className="flex flex-row flex-wrap justify-center py-6 sm:py-12 ">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id} // Assuming the project has an `id` property
                    project={project}
                />
            ))}
        </div>
    )
}

export default ProjectList