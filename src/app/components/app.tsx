import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import Main from "./main";
import Navigation from "./navigation";
import PokemonSearch from "./pokemon-search";

export default function App(props) {
  const [pageTitle, setTitle] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    setTitle(document.title);
    return () => {
      setTitle("");
    };
  }, [pageTitle]);
  return (
    <>
      <Navigation>
        <img
          className={"navbar-brand"}
          alt={pageTitle}
          src={"https://img.icons8.com/color/48/000000/gotcha.png"}
        ></img>
        <PokemonSearch setQuery={setQuery}></PokemonSearch>
      </Navigation>
      <Main pokeQuery={query}></Main>
    </>
  );
}
