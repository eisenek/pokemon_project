import React from "react";
import PokemonCard from "./pokemon-card";
import PokemonList from "./pokemon-list";

export default function Pokedex(props) {
  return getContent(props);
}

function getContent(props) {
  const isSelected = !!props.selectedPokemon;
  return <div className="row">{getColumnLayout(isSelected, props)}</div>;
}

function getColumnLayout(isSelected, props) {
  if (isSelected) {
    return (
      <>
        <div className="col-7">
          <PokemonList {...props}></PokemonList>
        </div>
        <div className="col-5">
          <PokemonCard selectedPokemon={props.selectedPokemon}></PokemonCard>
        </div>
      </>
    );
  } else {
    return (
      <div className="col-12">
        <PokemonList {...props}></PokemonList>
      </div>
    );
  }
}
