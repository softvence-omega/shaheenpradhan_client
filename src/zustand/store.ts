import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  name: string;
  isLoggedIn: boolean;
  setName: (name: string) => void;
  login: () => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist((set) => ({
    name: "",
    isLoggedIn: false,
    setName: (name) => set({ name }),
  }))
);
