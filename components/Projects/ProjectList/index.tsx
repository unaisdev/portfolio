import { useEffect, useState } from "react"
import ProjectCard from "../ProjectCard"
import { useLocalStore } from "@/zustand/store"
import { motion } from "framer-motion"

const ProjectList = () => {
    const projects = useLocalStore((state) => state.projects)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="flex flex-col justify-center my-6">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id} // Assuming the project has an `id` property
                    initial={{ x: -99999 }} // Initial position off the screen to the left
                    animate={isLoaded ? { x: 0 } : {}} // Final position at 0px from the left when `isLoaded` is true
                    transition={{ duration: 2, delay: index * 1 }} // Animation duration and delay based on the index
                >
                    <ProjectCard project={project} />
                </motion.div>
            ))}
        </div>
    )
}

export default ProjectList