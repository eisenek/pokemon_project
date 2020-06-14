import React from "react";
import PokemonItem from "./pokemon-item";

export default function PokemonList(props) {
  if (props.pokemons.length) {
    return (
      <div className="container">
        <ul className="list-group">
          {props.pokemons.map((pokemon) => (
            <PokemonItem
              name={pokemon.name}
              url={pokemon.url}
              updateSelectedPokemon={props.updateSelectedPokemon}
            ></PokemonItem>
          ))}
        </ul>
      </div>
    );
  } else {
    return <span>No pokemons in this area.</span>;
  }
}
