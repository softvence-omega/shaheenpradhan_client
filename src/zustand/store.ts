import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  name: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  setName: (name: string) => void;
  login: () => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      name: "",
      isLoggedIn: false,
      isLoading: false,
      setName: (name) => set({ name }),
      login: () => set({ isLoggedIn: true }),
      logout: () => set({ isLoggedIn: false, name: "" }),
      setLoading: (loading) => set({ isLoading: loading }),
    }),
    { name: "user-storage" }
  )
);
