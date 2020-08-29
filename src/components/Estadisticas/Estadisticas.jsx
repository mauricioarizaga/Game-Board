import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import {
  Button,
  Container,
  InputLabel,
  FormControl,
  NativeSelect,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { addShoots, events } from "../../redux/actions/playersActions";
import BootstrapInput from "../css/StatsCss.js";
import swal from "sweetalert2";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
export function Stats(data) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [nombre, setNombre] = useState("");
  const [distancia, setDistancia] = useState("");
  const [encestado, setEncestado] = useState("");
  const [posicionDisparo, setPosicionDisparo] = useState("");

  const shooter = {
    nombre,
    distancia,
    encestado,
    posicionDisparo,
  };

  function handleSubmit() {
    if (
      shooter.nombre === "" ||
      shooter.distancia === "" ||
      shooter.encestado === "" ||
      shooter.posicionDisparo === ""
    ) {
      swal.fire({
        text: `Todos los campos son requeridos`,
        icon: "error",
      });
    } else {
      const evento = {
        evento: "Tiros",
        nombre: shooter.nombre,
        distancia: shooter.distancia,
        encestado: shooter.encestado,
        posicion: shooter.posicionDisparo,
      };
      dispatch(addShoots(shooter));
      dispatch(events(evento));
      swal.fire({
        text: `Estadística cargada`,
        icon: "success",
      });
    }
    setNombre("");
    setDistancia("");
    setEncestado("");
    setPosicionDisparo("");
  }
  const load = JSON.parse(localStorage.getItem("JugLeg"));

  return (
    <Container>
      <div>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="demo-customized-select-native">
            Tirador
          </InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            input={<BootstrapInput />}
            required
          >
            <option value="" selected>
              Nombre Jugador
            </option>
            {load &&
              load.map((e) => (
                <option value={e.nombrecompleto}>
                  {e.nombrecompleto}({e.legajo})
                </option>
              ))}
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="demo-customized-textbox">Distancia</InputLabel>
          <BootstrapInput
            placeholder="Distancia"
            id="demo-customized-textbox"
            onChange={(e) => setDistancia(e.target.value)}
            value={distancia}
            type="number"
            required
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="demo-customized-select-native">
            Acertado
          </InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={encestado}
            onChange={(e) => setEncestado(e.target.value)}
            input={<BootstrapInput />}
            required
          >
            <option value="" selected>
              Encestado
            </option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="demo-customized-select-native">
            Posición Disparo
          </InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={posicionDisparo}
            onChange={(e) => setPosicionDisparo(e.target.value)}
            input={<BootstrapInput />}
            required
          >
            <option value="" selected>
              Posición Disparo
            </option>
            <option value="Derecha">Derecha</option>
            <option value="Izquierda">Izquierda</option>
            <option value="Punta">Punta</option>
            <option value="Frente">Frente</option>
            <option value="Indeterminado">Sin determinar</option>
          </NativeSelect>
        </FormControl>
        <div>
          {" "}
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Enviar
          </Button>
        </div>
      </div>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    eventos: state.eventos,
    jugador: state.jugador,
  };
}
export default connect(mapStateToProps)(Stats);
