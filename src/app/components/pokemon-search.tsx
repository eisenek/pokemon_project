import React, { useState } from "react";

export default function PokemonSearch(props) {
  const [pokeQuery, setPokeQuery] = useState("");
  return (
    <form className="form-inline ml-auto">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={function (event) {
          setPokeQuery(event.target.value);
        }}
      ></input>
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          props.setQuery(pokeQuery);
        }}
      >
        Search
      </button>
    </form>
  );
}
