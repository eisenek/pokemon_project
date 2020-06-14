import classNames from "classnames";
import React, { useState } from "react";
import "../styles/pokemon-item.css";

export default function PokemonItem(props) {
  const [isItemActive, setActive] = useState(false);

  return (
    <li
      className={classNames([
        "pokedex-item",
        "list-group-item",
        "list-group-item-action",
        "d-inline-flex",
      ])}
    >
      <span className="pokemon-name">{props.name}</span>
      <button
        className={classNames(["catch-button", "btn"], {
          "btn-primary": !isItemActive,
          "btn-light": isItemActive,
        })}
        type="button"
        onClick={() => fetchPokemonData(props.url, props.updateSelectedPokemon)}
      >
        Catch!
      </button>
    </li>
  );
}

async function fetchPokemonData(url, updateSelectedPokemon) {
  try {
    const pokemonPromise = await fetch(url);
    const result = await pokemonPromise.json();
    updateSelectedPokemon(result);
  } catch (error) {
    console.log(error);
  }
}
