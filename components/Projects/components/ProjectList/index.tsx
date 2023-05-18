import { useEffect, useState } from "react"
import ProjectCard from "../ProjectCard"
import { useLocalStore } from "@/zustand/store"

const ProjectList = () => {
    const projects = useLocalStore((state) => 
        state.projects
    )

    return (
        <div className="flex flex-row flex-wrap justify-center py-6 ">
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