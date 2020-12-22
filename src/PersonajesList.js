import React, { useState, useEffect } from "react";

import Personaje from "./Personaje";
function PersonajesList() {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const [personajes, setPersonajes] = useState([]);

  const fechtPersonajes = async () => {
    var pokesArr = [];
    var objetoPokemon = {};
    for (var i = 1; i < 150; i++) {
      const response = await fetch(`${url}${i}`);
      const data = await response.json();
      pokesArr.push(data);
    }

    pokesArr.map((item) => {
      return item;
    });
    if (pokesArr.length > 0) {
      setPersonajes(pokesArr);
    }
  };

  useEffect(() => {
    fechtPersonajes();
  }, []);

  return (
    <div>
      {personajes.map((item) => {
        console.log(item);
        return <Personaje key={item.id} {...item} />;
      })}
    </div>
  );
}

export default PersonajesList;
