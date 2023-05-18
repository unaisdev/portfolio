import { useLocalStore } from "@/zustand/store"
import JobCard from "../JobCard"

const JobList = () => {
    const [jobs] = useLocalStore((state) => [state.jobs])

    return (
        <>
            {jobs.map((job) =>
                <JobCard
                    key={job.id}
                    job={job}
                />
            )}
        </>
    )
}

export default JobList