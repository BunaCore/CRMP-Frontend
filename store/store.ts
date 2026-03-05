import { create } from 'zustand'  

interface UserState {
  currentUser: any | null       // Logged-in user info or null
  error: string | null          // Error message if login/signup fails
  loading: boolean              // True if login/signup request is in progress

  // Actions to update the state
  signInStart: () => void
  signInSuccess: (user: any) => void
  signInFailure: (message: string) => void
}

const useUserStore = create<UserState>((set) => ({
  currentUser: null,   // initial user state
  error: null,         // initial error state
  loading: false,      // initial loading state

  // Actions
  signInStart: () => set({ loading: true }),
  signInSuccess: (user) => set({ currentUser: user, loading: false, error: null }),
  signInFailure: (message) => set({ error: message, loading: false }),
}))

export default useUserStore