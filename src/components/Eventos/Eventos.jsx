import React from "react";
import { connect, useDispatch } from "react-redux";
import {
  Container,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getEvents } from "../../redux/actions/playersActions";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
}));
export function Events(data) {
  const classes = useStyles();
  const dispatch = useDispatch();
  dispatch(getEvents());

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Tipo Evento</TableCell>
              <TableCell align="right">Jugador</TableCell>
              <TableCell align="right">Distancia</TableCell>
              <TableCell align="right">Encestado</TableCell>
              <TableCell align="right">Posición</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.eventos &&
              data.eventos.reverse().map((e) => (
                <TableRow key={e.evento}>
                  <TableCell component="th" scope="row">
                    {e.evento}
                  </TableCell>
                  <TableCell align="right">{e.nombre}</TableCell>
                  <TableCell align="right">{e.distancia}</TableCell>
                  <TableCell align="right">{e.encestado}</TableCell>
                  <TableCell align="right">{e.posicion}</TableCell>
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
    eventos: state.eventos,
  };
}

export default connect(mapStateToProps)(Events);
