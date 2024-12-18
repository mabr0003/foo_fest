import { create } from "zustand";

const useLoginStore = create((set) => ({
  isLoggedIn: false, // Default to false, will be updated later by a component

  setLogIn: () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isLoggedIn", "true");
    }
    set({ isLoggedIn: true });
  },

  setLogOut: () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isLoggedIn", "false");
    }
    set({ isLoggedIn: false });
  },
}));

export default useLoginStore;
