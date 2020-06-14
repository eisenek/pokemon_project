import React, { useEffect, useState } from "react";
import Pokedex from "./pokedex";
const pokeApi = "https://pokeapi.co/api/v2/";
const pokemonsOnPage = 1000;

export default function Main(props) {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    if (!pokemons.length) {
      const fetchPokemons = async () => {
        try {
          const pokemon = await fetch(
            `${pokeApi}pokemon?limit=${pokemonsOnPage}`
          );
          const { results, next, previous } = await pokemon.json();
          setPokemons([...results]);
          setNextPage(next);
        } catch (error) {
          console.log(error);
        }
      };
      fetchPokemons();
    }
  });
  function updateSelectedPokemon(newlySelectedPokemon) {
    setSelectedPokemon(newlySelectedPokemon);
  }

  return (
    <main className="container">
      <Pokedex
        pokemons={getPokemons(pokemons, props.pokeQuery)}
        nextPage={nextPage}
        setNextPage={setNextPage}
        selectedPokemon={selectedPokemon}
        updatePokemons={setPokemons}
        updateSelectedPokemon={updateSelectedPokemon}
      ></Pokedex>
    </main>
  );
}

function getPokemons(pokemons, pokeQuery) {
  if (pokemons.length && pokeQuery) {
    return pokemons.filter((pokemon) => pokemon.name.includes(pokeQuery));
  }
  return pokemons;
}
