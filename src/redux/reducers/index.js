const load = JSON.parse(localStorage.getItem("JugLeg"));
const initialState = {
  jugador: load || [],
  tiros: [],
  eventos: [],
};
function rootReducer(state = initialState, action) {
  if (action.type === "ADD_PLAYER") {
    return {
      ...state,
      jugador: state.jugador.concat(action.payload),
    };
  }
  if (action.type === "DEL_PLAYER") {
    console.log("action", action.payload);
    console.log("state.jugador", state.jugador);
    return {
      ...state,
      jugador: state.jugador.splice(action.payload, 1),
    };
  }
  if (action.type === "ADD_SHOOT") {
    return {
      ...state,
      tiros: state.tiros.concat(action.payload),
    };
  }
  if (action.type === "ADD_EVENTS") {
    return {
      ...state,
      eventos: state.eventos.concat(action.payload),
    };
  }
  if (action.type === "GET_EVENTS") {
    console.log("Hola reducer", state);
    return {
      ...state,
      eventos: state.eventos,
    };
  }
  return state;
}
export default rootReducer;
