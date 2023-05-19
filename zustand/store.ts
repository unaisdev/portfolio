import { create } from "zustand";
import { Job, Prisma, Project, Skill } from "@prisma/client";

type State = {
  isLoading: boolean;
  projects: Project[];
  skills: Skill[];
  jobs: Job[];
  populateData: () => void;
};


const getProjects = async (): Promise<Project[]> => {
  try {
    const res = await fetch(`api/projects`, {
      method: "GET",
      headers: {},
    });

    const data: Project[] = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getSkills = async (): Promise<Skill[]> => {
  try {
    const res = await fetch(`api/skills`, {
      method: "GET",
      headers: {},
    });

    const data: Skill[] = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getJobs = async (): Promise<Job[]> => {
  try {
    const res = await fetch(`api/jobs`, {
      method: "GET",
      headers: {},
    });

    const data: Job[] = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const useLocalStore = create<State>((set) => ({
  projects: [],
  skills: [],
  jobs: [],
  isLoading: true,
  populateData: async () => {
    try {
      const projects = await getProjects();
      const skills = await getSkills();
      const jobs = await getJobs();
      set({ skills });
      set({ projects });
      set({ jobs });
    } catch (err) {
      console.log(err);
    } finally {
      set({ isLoading: false }); // Call setLoaded after fetch, regardless of success or failure
    }
  },
}));
