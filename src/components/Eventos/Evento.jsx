import React from "react";
import { Container } from "@material-ui/core";
function Evento(evento) {
  return (
    <Container>
      <li>
        <span>{evento.nombre} </span>
        <span>{evento.distancia} </span>
        <span>{evento.encestado} </span>
        <span>{evento.posicion} </span>
      </li>
    </Container>
  );
}
export default Evento;
