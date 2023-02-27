import { create } from "zustand";

export const usePokemonStore = create((set) => ({
  pokemonList: [],
  getPokemons: async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => set({ pokemonList: data.results }));
  },
}));

export const useCounterStore = create((set, get) => ({
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
}));
