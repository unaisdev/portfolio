import { project } from "@prisma/client";
import Image from "next/image";

type Props = {
    project: project;
}

const ProjectCard = ({ project }: Props) => {
    const { title, desc, image_src } = project;

    return (
        <div className="relative col w-full h-64 border-gray-900 border-t-gray-400 border-t sm:border-0 sm:my-0 py-4 overflow-hidden hover:opacity-75 dark:hover:opacity-80 transition duration-500">
            <div className='absolute inset-0 z-10 w-full h-full bg-slate-50 dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-80 transition duration-500'></div>

            <Image
                className="object-cover"
                src={image_src}
                fill={true}
                alt=""
            ></Image>
            <div className="relative z-30 m-4 mt-1">
                <h2 className="first-letter:text-xl text-md font-semibold py-4 uppercase">{title}</h2>
                <p className="text-sm">{desc}</p>
            </div>
        </div>
    );
};

export default ProjectCard;