import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      isLogin: false,
      user: null,

      login: (userData) =>
        set({ isLogin: true, user: userData }),

      logout: () =>
        set({ isLogin: false, user: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
