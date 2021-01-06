import "./Personaje.css";

import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

function Personaje(props) {
  var pokeTypes = props.types.map((item) => item.type.name);

  const colors = {
    fire: "card--fire",
    grass: "card--grass",
    electric: "card--electric",
    water: "card--water",
    ground: "card--ground",
    rock: "card--rock",
    fairy: "card--fairy",
    poison: "card--poison",
    bug: "card--bug",
    dragon: "card--water",
    psychic: "card--psychic",
    flying: "card--flying",
    fighting: "card--fighting",
    normal: "card--normal ",
  };

  return (
    <>
      <figure
        id="bg"
        className={
          "card " +
          (props.types[0].type.name ? colors[props.types[0].type.name] : "")
        }
        //style={{ backgroundColor: colors[props.types[0].type.name] }}
      >
        <div class="card__image-container">
          <img
            src={props.sprites.other["official-artwork"].front_default}
            alt="Eevee"
            class="card__image"
          />
        </div>

        <figcaption class="card__caption">
          <h1 class="card__name">{props.name.toUpperCase()}</h1>

          <h3 class="card__type">
            {props.types.map((item) => {
              return <ul>{item.type.name}</ul>;
            })}
          </h3>

          <table class="card__stats">
            <tbody>
              <tr>
                <th>HP</th>
                <td>{props.stats[0].base_stat}</td>
              </tr>
              <tr>
                <th>Attack</th>
                <td>{props.stats[1].base_stat}</td>
              </tr>

              <tr>
                <th>Defense</th>
                <td>{props.stats[2].base_stat}</td>
              </tr>

              <tr>
                <th>Special Attack</th>
                <td>{props.stats[3].base_stat}</td>
              </tr>
              <tr>
                <th>Special Defense</th>
                <td>{props.stats[4].base_stat}</td>
              </tr>
              <tr>
                <th>Speed</th>
                <td>{props.stats[5].base_stat}</td>
              </tr>
            </tbody>
          </table>

          <div class="card__abilities">
            {props.abilities.map((item) => {
              return (
                <h4 class="card__ability">
                  <span class="card__label">Ability</span>
                  {item.ability.name}
                </h4>
              );
            })}
          </div>
        </figcaption>
        <br></br>
        <Link to={`description/${props.id}`} style={{ textDecoration: "none" }}>
          <a class="button1 bouncy">
            <b>More</b>
          </a>
        </Link>
      </figure>
    </>
  );
}

export default Personaje;
