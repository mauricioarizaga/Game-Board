import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import BoardCss from "../css/BoardCss.jsx";
import RegisterPlayers from "../Players/RegisterPlayers";
import Events from "../Eventos/Eventos";
import Stats from "../Estadisticas/Estadisticas";

export function Board() {
  const load = () => {
    return JSON.parse(localStorage.getItem("JugLeg"));
  };
  useEffect(() => {
    load();
  });

  return (
    <Container fixed>
      <BoardCss />
      <RegisterPlayers />
      <Stats />
      <Events />
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    jugadores: state.jugador,
    eventos: state.eventos,
  };
}
export default connect(mapStateToProps)(Board);
