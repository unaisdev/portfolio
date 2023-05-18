import { create } from "zustand";
import { Prisma, Project, Skill } from "@prisma/client";

type State = {
  isLoading: boolean;
  projects: Project[];
  skills: Skill[];
  populateData: () => void;
};


const getProjects = async (): Promise<Project[]> => {
  try {
    const res = await fetch(`api/projects`, {
      method: "GET",
      headers: {},
    });

    const data: Project[] = await res.json();
    console.log(JSON.stringify(data));
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
    console.log(JSON.stringify(data));
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const useLocalStore = create<State>((set) => ({
  projects: [],
  skills: [],
  isLoading: true,
  populateData: async () => {
    try {
      const projects = await getProjects();
      const skills = await getSkills();
      set({ skills });
      set({ projects });
    } catch (err) {
      console.log(err);
    } finally {
      set({ isLoading: false }); // Call setLoaded after fetch, regardless of success or failure
    }
  },
}));
