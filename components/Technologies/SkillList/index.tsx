import { useLocalStore } from "@/zustand/store";
import { Skill } from "@prisma/client";
import Image from "next/image";
import { ReactElement } from "react";

interface Props {
    skills: Skill[];
    className?: string;
    showText?: boolean;
}

interface SkillIconProps {
    name: string;
    imagePath: string;
    showText?: boolean;

}

const SkillIcon = ({ name, imagePath, showText }: SkillIconProps): ReactElement => {
    return (
        <div className={`relative flex items-center border rounded-full mx-2 my-2 ${showText ? "pr-2": ""}
         text-gray-500 border-gray-200 bg-gray-100 hover:bg-gray-300 hover:text-gray-900 focus:z-10 
         focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-500 dark:text-gray-400
         dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700 transition duration-500`}>
            <div className="flex items-center justify-around px-2">
                <div className="flex items-center justify-center rounded-full z-10">
                    <Image className="m-2 z-20" src={imagePath} alt={name} width={24} height={24} />

                </div>
                {showText && (
                    <span className="text-xs sm:text-sm pl-2 z-20">{name}</span>
                )}
            </div>
        </div>
    );
};

const SkillList = ({ skills, className, showText }: Props) => {
    skills.sort(() => Math.random() - 0.5);

    return (
        <div className={`${className ? className : "flex flex-wrap md:w-auto justify-center px-2"}`}>
            {skills.map((skill) => (
                <SkillIcon
                    imagePath={skill.image_path}
                    name={skill.name}
                    showText={showText}
                    key={skill.id}
                />
            ))}
        </div>
    )
}

export default SkillList