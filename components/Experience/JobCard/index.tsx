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
        <div>
            <div className="flex flex-col justify-end items-end">
                <p className="font-semibold text-xs sm:text-sm text-right sm:text-left">{job.from_date} - {job.to_date}</p>
                <p className="font-medium text-xxs sm:text-xs text-right sm:text-left text-gray-300">Contrato de prácticas</p>

            </div>

            <div className="flex flex-col md:flex-row items-center justify-between py-6 px-6">
                <div className="py-4">
                    <p className="font-semibold text-xl sm:text-2xl whitespace-nowrap">{job.title}</p>
                    <p className="text-sm pt-2">{job.desc}</p>
                </div>


                <div className="py-2 sm:py-0 max-w-sm">
                    <SkillList skills={jobSkills} />

                </div>
            </div>


        </div>


    )
}

export default JobCard