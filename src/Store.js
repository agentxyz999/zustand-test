import { create } from "zustand";
export const useCounterStore = create((set, get) => ({
  pokemon: [],
  number: 0,
  user: {
    name: "John",
    lastName: "Doe",
  },
  //   functions
  increment: () => set((state) => ({ number: state.number + 1 })),
  decrement: () =>
    set((state) =>
      // if counter is 0 stay at 0 (no negatives)
      state.number > 0 ? { number: state.number - 1 } : { number: 0 }
    ),
  logNumber: () => {
    console.log(` Current number value equals ${get().number}`);
  },
  //   using async function to fetch data from API
  fetchPokemon: async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => set({ pokemon: data.results }));
  },
}));

// import { create } from "zustand";

// const createPokemonStore = (set) => ({
//   pokemonList: [],
//   getPokemon: async () => {
//     await fetch("https://pokeapi.co/api/v2/pokemon")
//       .then((response) => response.json())
//       .then((data) => set({ pokemon: data.results }));
//   },
// });

// const createCounterStore = (set, get) => ({
//   number: 123,
//   increaseCounterNumber: () => set((state) => ({ number: state.number + 1 })),
//   decreaseCounterNumber: () => set((state) => ({ number: state.number - 1 })),
//   logNumber: () => {
//     console.log(` Current number value equals ${get().number}`);
//   },
// });

// export const useCombinedStore = create((...params) => ({
//   ...createPokemonStore(...params),
//   ...createCounterStore(...params),
// }));
