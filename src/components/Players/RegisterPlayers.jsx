import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import RegisterCss from "../css/RegisterCss.js";
import {
  Container,
  Button,
  InputLabel,
  FormControl,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  TableCell,
  TableBody,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import { loadPlayer, delPlayer } from "../../redux/actions/playersActions";
import swal from "sweetalert2";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(2, 0, 1),
  },
}));

export function RegisterPlayers() {
  const classes = useStyles();
  const [dense, setDense] = useState(false);
  const dispatch = useDispatch();
  const [nombrecompleto, setNombre] = useState("");
  const [legajo, setLegajo] = useState("");
  const jugador = {
    nombrecompleto,
    legajo,
  };

  function deleteJugador(index) {
    dispatch(delPlayer(index));
    swal.fire({
      text: `El Jugador ha sido borrado.`,
      icon: "warning",
    });
    setNombre("");
    setLegajo("");
  }

  function handleSubmit() {
    if (jugador.nombrecompleto === "" || jugador.legajo === "") {
      swal.fire({
        text: `Todos los campos son requeridos`,
        icon: "error",
      });
    } else {
      dispatch(loadPlayer(jugador));
      swal.fire({
        title: "¡Alta realizada!",
        text: `El Jugador ${nombrecompleto} con legajo ${legajo} ha sido dado de alta.`,
        icon: "success",
      });

      setNombre("");
      setLegajo("");
    }
  }
  const load = JSON.parse(localStorage.getItem("JugLeg"));
  return (
    <Container>
      <Typography variant="h6" className={classes.title}>
        Alta de Jugadores
      </Typography>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox">
          Nombre Completo
        </InputLabel>
        <RegisterCss
          placeholder="Nombre Completo"
          id="demo-customized-textbox"
          onChange={(e) => setNombre(e.target.value)}
          value={nombrecompleto}
          type="text"
          required
        />
      </FormControl>

      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox">Legajo</InputLabel>
        <RegisterCss
          placeholder="Legajo"
          id="demo-customized-textbox"
          onChange={(e) => setLegajo(e.target.value)}
          value={legajo}
          type="number"
          required
        />
      </FormControl>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => handleSubmit()}
        >
          Enviar
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="right">Jugador</TableCell>
              <TableCell align="right">Legajo</TableCell>
              <TableCell align="right">Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {load &&
              load.reverse().map((e, index) => (
                <TableRow key={e.evento}>
                  <TableCell align="right">{e.nombrecompleto}</TableCell>
                  <TableCell align="right">{e.legajo}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={(element) => {
                        deleteJugador(index);
                      }}
                    >
                      <DeleteSharpIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    jugadores: state.jugador,
    eventos: state.eventos,
  };
}
export default connect(mapStateToProps)(RegisterPlayers);
