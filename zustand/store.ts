import { SetState, StoreApi, create } from "zustand";
import { Prisma, project } from "@prisma/client";

type State = {
  isLoading: boolean;
  projects: project[];
  populateProjects: () => void;
};

const getProjects = async (): Promise<project[]> => {
  try {
    const res = await fetch(`http://localhost:3000/api/projects`, {
      method: "GET",
      headers: {},
    });

    const data: project[] = await res.json();
    console.log(JSON.stringify(data));
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const useProjectsStore = create<State>((set) => ({
  projects: [],
  populateProjects: async () => {
    try {
      const projects = await getProjects();
      set({ projects });
    } catch (err) {
      console.log(err);
    } finally {
      set({ isLoading: false }); // Call setLoaded after fetch, regardless of success or failure
    }
  },
  isLoading: true,
}));
