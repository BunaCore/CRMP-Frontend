import { create } from "zustand";
import { persist, createJSONStorage} from "zustand/middleware";

interface TeamMember {
  name: string;
  role: string;
  department: string;
  email: string;
}

interface TeamStore {
  team: TeamMember[];
  setTeam: (members: TeamMember[]) => void;
  addMember: (member: TeamMember) => void;
  resetTeam: () => void;
}

const useTeamStore = create<TeamStore>()(
  persist(
    (set) => ({
      team: [],

      setTeam: (members) => set({ team: members }),

      addMember: (member) =>
        set((state) => ({
          team: [...state.team, member],
        })),

      resetTeam: () => set({ team: [] }),
      removeMember: (index: number) =>
      set((state) => ({ team: state.team.filter((_, i) => i !== index) }))
    }),
    {
      name: "team-storage", 
      
    }
  )
);

export default useTeamStore;