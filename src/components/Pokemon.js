import React, { useEffect } from "react";
import { usePokemonStore } from "../Store";

const Pokemon = () => {
  const getPokemons = usePokemonStore((state) => state.getPokemons);
  const pokemonList = usePokemonStore((state) => state.pokemonList);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);
  if (!pokemonList.length) {
    return <p>Loading Pokemons...</p>;
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
