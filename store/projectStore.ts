import { create } from "zustand"
import { persist,createJSONStorage } from "zustand/middleware"

interface Project {
  title: string
  theme: string
  abstract: string
  duration: string
  startDate: string
}

interface ProjectStore {
  project: Project
  setProject: (data: Partial<Project>) => void
  resetProject: () => void
}

const useProjectStore = create<ProjectStore>()(
  persist(
    (set) => ({
      project: {
        title: "",
        theme: "",
        abstract: "",
        duration: "",
        startDate: "",
      },

      setProject: (data) =>
        set((state) => ({
          project: { ...state.project, ...data },
        })),

      resetProject: () =>
        set({
          project: {
            title: "",
            theme: "",
            abstract: "",
            duration: "",
            startDate: "",
          },
        }),
    }),
    {
      name: "project-storage", 
    }
  )
)

export default useProjectStore