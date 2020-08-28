import React from "react";
import { Route } from "react-router-dom";
import RegisterPlayers from "./components/Players/RegisterPlayers";
import Board from "./components/Board/Board";
function App() {
  return (
    <React.Fragment>
      <Route path="/" component={Board} />
      <Route path="/addplayers" component={RegisterPlayers} />
      {/* 
      <Route path="/footer" component={Footer} /> */}
    </React.Fragment>
  );
}

export default App;
