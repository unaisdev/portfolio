import SkillList from "@/components/Technologies/SkillList";
import { useLocalStore } from "@/zustand/store";
import { Job, Skill } from "@prisma/client";

interface Props {
    job: Job;
}

const JobCard = ({ job }: Props) => {
    const [skills] = useLocalStore((state) => [state.skills])

    const jobSkills = skills.filter((skill) => job.skillIds.includes(skill.id));

    return (
        <div className="py-6">
            <div className="flex sm:hidden flex-col justify-end items-end">
                <p className="font-semibold text-xs sm:text-sm text-right sm:text-left">{job.from_date} - {job.to_date}</p>
                {/* <p className="font-medium text-xxs sm:text-xs text-right sm:text-left text-gray-300">Contrato de prácticas</p> */}

            </div>

            <div className="flex flex-col md:flex-row items-center justify-between px-6">
                <div className="py-4">
                    <p className="font-semibold text-xl sm:text-2xl whitespace-nowrap">{job.title}</p>
                    <p className="text-sm max-w-lg pt-2">{job.desc}</p>
                </div>


                <div className=" py-2 sm:py-0 max-w-sm">
                    <div className="flex flex-col justify-end items-end">
                        <p className="font-semibold hidden sm:flex text-xs sm:text-sm text-right sm:text-left sm:pb-4">{job.from_date} - {job.to_date}</p>
                        {/* <p className="font-medium hidden sm:flex text-xxs sm:text-xs text-right sm:text-left text-gray-300">Contrato de prácticas</p> */}
                        <SkillList className="flex flex-wrap md:w-auto justify-center sm:justify-end" skills={jobSkills} />

                    </div>

                </div>
            </div>


        </div>


    )
}

export default JobCard