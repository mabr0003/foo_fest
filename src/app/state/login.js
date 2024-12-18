import { create } from "zustand";

const useLoginStore = create((set) => ({
  // Tjekker om brugeren er logget ind ved at læse fra localStorage
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",

  // Funktion til at sætte login-status til true og gemme det i localStorage
  setLogIn: () => {
    localStorage.setItem("isLoggedIn", "true"); // Gem login-status i localStorage
    set({ isLoggedIn: true });
  },

  // Funktion til at sætte login-status til false og fjerne det fra localStorage
  setLogOut: () => {
    localStorage.setItem("isLoggedIn", "false"); // Fjern login-status fra localStorage
    set({ isLoggedIn: false });
  },
}));

export default useLoginStore;
