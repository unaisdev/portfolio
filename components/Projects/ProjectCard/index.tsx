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
        <div className="relative w-full h-auto border-gray-900 sm:border-0 sm:my-0 hover:opacity-75 dark:hover:opacity-80 transition duration-500">
            <div className='absolute inset-0 z-10 w-full h-full bg-slate-50 dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-80 transition duration-500'></div>

            <Image
                className="object-cover"
                src={image_src}
                fill={true}
                alt=""
            ></Image>
            <div className="relative flex justify-between flex-col sm:flex-row z-30 h-full p-4 sm:p-8">
                <div className="flex flex-col justify-end pb-6 sm:pb-0">
                        <h2 className="sm:first-letter:text-5xl first-letter:text-2xl text-xl sm:text-2xl font-semibold py-4 uppercase">{title}</h2>
                        <p className="text-sm">{desc}</p>
                </div>
                <div className="flex justify-end max-w-lg items-center">
                    <SkillList skills={projectSkills} />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;