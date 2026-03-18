import { create } from "zustand";
import { persist, createJSONStorage} from "zustand/middleware";

interface UserState {
  currentUser: any | null;
  error: string | null;
  loading: boolean;

  signInStart: () => void;
  signInSuccess: (user: any) => void;
  signInFailure: (message: string) => void;
  setLoading: (value: boolean) => void;
  toggleLoading: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      currentUser: null,
      error: null,
      loading: false,

      signInStart: () => set({ loading: true }),

      signInSuccess: (user) =>
        set({
          currentUser: user,
          loading: false,
          error: null,
        }),

      signInFailure: (message) =>
        set({
          error: message,
          loading: false,
        }),

      setLoading: (value) => set({ loading: value }),

      toggleLoading: () =>
        set((state) => ({ loading: !state.loading })),
    }),
    {
      name: "user-storage", // key in localStorage
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);

export default useUserStore;