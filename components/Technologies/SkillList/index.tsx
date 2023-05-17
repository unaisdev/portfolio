import { useLocalStore } from "@/zustand/store";
import { skill } from "@prisma/client"
import Image from "next/image";
import { ReactElement } from "react";

interface Props {
    skills: skill[];
}

interface SkillIconProps {
    name: string;
    imagePath: string;
}

const SkillIcon = ({ name, imagePath }: SkillIconProps): ReactElement => {
    return (
        <div className="relative flex items-center border rounded-full mx-2 my-2 pr-2 text-gray-500 border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition duration-500">
            <div className="flex items-center justify-around px-2">
                <div className="flex items-center justify-center rounded-full z-10">
                    <Image className="m-2 z-20" src={imagePath} alt={name} width={24} height={24} />

                </div>
                <span className="text-xs sm:text-sm pl-2 z-20">{name}</span>
            </div>
        </div>
    );
};

const SkillList = ({ skills }: Props) => {

    return (
        <div className="flex flex-wrap w-screen md:w-auto justify-center px-2">
            {skills.map((skill) => (
                <SkillIcon
                    imagePath={skill.image_path}
                    name={skill.name}
                    key={skill.id}
                />
            ))}
        </div>
    )
}

export default SkillList