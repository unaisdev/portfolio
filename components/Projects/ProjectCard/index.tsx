import SkillList from "@/components/Technologies/SkillList";
import { useLocalStore } from "@/zustand/store";
import { Project } from "@prisma/client";
import Image from "next/image";

type Props = {
    project: Project;
}

const ProjectCard = ({ project }: Props) => {
    const { title, desc, image_src, skillIds } = project;

    const skills = useLocalStore((state) => state.skills)

    const projectSkills = skills.filter((skill) => project.skillIds.includes(skill.id));


    return (
        <div className="relative w-full h-64 border-gray-900 border-t-gray-400 border-t sm:border-0 sm:my-0 overflow-hidden hover:opacity-75 dark:hover:opacity-80 transition duration-500">
            <div className='absolute inset-0 z-10 w-full h-full bg-slate-50 dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-80 transition duration-500'></div>

            <Image
                className="object-cover"
                src={image_src}
                fill={true}
                alt=""
            ></Image>
            <div className="relative flex justify-between flex-col sm:flex-row z-30 h-full p-4 sm:p-8">
                <div className="flex flex-col justify-end">
                        <h2 className="first-letter:text-5xl text-2xl font-semibold py-4 uppercase">{title}</h2>
                        <p className="text-sm">{desc}</p>
                </div>
                <div className="flex justify-center items-center">
                    <SkillList skills={projectSkills} />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;