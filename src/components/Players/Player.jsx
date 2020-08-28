import React from "react";
import { Container } from "@material-ui/core";
function Player(jugador) {
  return (
    <Container>
      <li>
        <label>Nombre: </label>
        <span>{jugador.nombrecompleto} </span>
        <label>Legajo: </label>
        <span>{jugador.legajo} </span>
      </li>
    </Container>
  );
}
export default Player;
