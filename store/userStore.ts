import { create } from "zustand";

interface AuthUser {
  id: string;
  fullname?: string;
  email: string;
  role?: string;
}

interface UserState {
  currentUser: AuthUser | null;
  error: string | null;
  loading: boolean;

  // Actions
  signInStart: () => void;
  signInSuccess: (user: AuthUser) => void;
  signInFailure: (message: string) => void;
  setLoading: (value: boolean) => void;
  toggleLoading: () => void;
}

const useUserStore = create<UserState>((set) => ({
  currentUser: null,
  error: null,
  loading: false,

  // User actions
  signInStart: () => set({ loading: true }),
  signInSuccess: (user) =>
    set({ currentUser: user, loading: false, error: null }),
  signInFailure: (message) => set({ error: message, loading: false }),

  // Loading actions
  setLoading: (value) => set({ loading: value }),
  toggleLoading: () => set((state) => ({ loading: !state.loading })),
}));

export default useUserStore;
