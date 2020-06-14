import React from "react";
import "../styles/pokemon-card.css";

export default function PokemonCard(props) {
  const {
    selectedPokemon: { moves, abilities, sprites, name },
  } = props;
  return (
    <div className="card mh-100">
      <img
        className="ml-auto mr-auto w-50 card-img-top"
        src={sprites.front_default}
        alt="Sprite"
      ></img>
      <div className="card-body">
        <h5 className="card-title">
          {name}
          <hr></hr>
        </h5>
        <p className="card-text">
          <h6>Abilities</h6>
          <ul className="list-group">
            {abilities.map(({ ability: { name } }) => (
              <li className="list-group-item">{name}</li>
            ))}
          </ul>
        </p>
        <p className="card-text">
          <p>
            <button
              className="btn btn-primary"
              type="button"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Moves
            </button>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <ul>
                {moves.map(({ move: { name } }) => (
                  <li>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}
