import { SetState, StoreApi, create } from "zustand";
import { Prisma, project, skill } from "@prisma/client";

type State = {
  isLoading: boolean;
  projects: project[];
  skills: skill[];
  populateData: () => void;
};


const getProjects = async (): Promise<project[]> => {
  try {
    const res = await fetch(`api/projects`, {
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

const getSkills = async (): Promise<skill[]> => {
  try {
    const res = await fetch(`api/skills`, {
      method: "GET",
      headers: {},
    });

    const data: skill[] = await res.json();
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
  isLoading: true,
}));


// // Vercel deployment store configuration
// export const useVercelProjectsStore = create<State>((set) => ({
//   projects: [
//     {
//       id: "1",
//       title: "Portfolio",
//       desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, maiores quod ad ducimus dolor incidunt velit quasi reiciendis debitis amet possimus harum eum voluptate quis nulla explicabo soluta, neque error.",
//       image_src: "/images/portfolio_unai_canales.webp",
//       published_at: "",
//       skillIds: [1, 2],
//     },
//     // Add other projects as needed
//   ],
//   populateProjects: async () => {
//     // No API fetch is required in this case, as we're using literals
//     // If needed, you can implement additional logic here
//   },
//   isLoading: false,
// }));


// export const useFetchLoading = create<State>((set) => ({
  
//   populateProjects: async () => {
//     // No API fetch is required in this case, as we're using literals
//     // If needed, you can implement additional logic here
//   },
//   isLoading: false,
// }));
