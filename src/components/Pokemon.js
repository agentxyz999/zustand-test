import React, { useEffect } from "react";
import { useCounterStore } from "../Store";

const Pokemon = () => {
  const getPokemons = useCounterStore((state) => state.fetchPokemon);
  const pokemonList = useCounterStore((state) => state.pokemon);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  if (!pokemonList.length) {
    return <p>Loading...</p>;
  }

  return (
    <ol>
      {pokemonList.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </ol>
  );
};

export default Pokemon;
