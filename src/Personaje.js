import React from "react";

function Personaje(props) {
  return (
    <div>
      <div className="contenedor"></div>
      <img height="200" src={props.sprites.other.dream_world.front_default} />
      <h1>
        {props.id} {props.name}
      </h1>
    </div>
  );
}

export default Personaje;
