import React from "react";
import { Button, Container } from "@material-ui/core/";
const NavBar = () => {
  return (
    <Container>
      <div>
        <Button href="/addplayers" type="button">
          Agregar Jugadores
        </Button>
        <Button href="/board" type="button">
          Cargar Tiros
        </Button>
        <Button href="/jugadores" type="button">
          Listado
        </Button>
      </div>
    </Container>
  );
};

export default NavBar;
