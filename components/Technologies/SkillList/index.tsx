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
        <div className="flex items-center justify-between border rounded-full px-4 sm:px-6 py-1 sm:py-2 m-2">
            <Image className="mr-4 my-2" src={imagePath} alt={name} width={24} height={24} />
            <span className="text-xs sm:text-sm">{name}</span>
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