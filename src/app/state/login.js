import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLoginStore = create(
  persist(
    (set) => ({
      isLoggedIn: false, // Standard værdi

      setLogIn: () => set({ isLoggedIn: true }),
      setLogOut: () => set({ isLoggedIn: false }),
    }),
    {
      name: "login-storage", // Navn på localStorage key
      partialize: (state) => ({ isLoggedIn: state.isLoggedIn }), // Gem kun login-status
    }
  )
);

export default useLoginStore;
