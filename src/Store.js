import { create } from "zustand";
import { persist } from "zustand/middleware";

// pokemon store starts here
export const usePokemonStore = create((set) => ({
  pokemonList: [],
  getPokemons: async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => set({ pokemonList: data.results }));
  },
}));
// pokemon store ends here

// counter store start here
let counterStore = (set, get) => ({
  number: 0,
  increment: () => set((state) => ({ number: state.number + 1 })),
  decrement: () =>
    set((state) =>
      // if counter is 0 stay at 0 (no negatives)
      state.number > 0 ? { number: state.number - 1 } : { number: 0 }
    ),
  logNumber: () => {
    console.log(` Current number value equals ${get().number}`);
  },
  //reset counter
  reset: () => set((state) => ({ number: 0 })),
});
// then
counterStore = persist(counterStore, { name: "counter" });
// and export
export const useCounterStore = create(counterStore);
// counter store ends here

// User_settings or Dark mode
let userSettingsStore = (set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
});
userSettingsStore = persist(userSettingsStore, { name: "mode" });
export const useUserSettingsStore = create(userSettingsStore);

// people store starts here
let peopleStore = (set) => ({
  people: [],
  addPerson: (person) =>
    set((state) => ({ people: [...state.people, person] })),
});
peopleStore = persist(peopleStore, { name: "people" });
export const usePeopleStore = create(peopleStore);
// people store ends here
