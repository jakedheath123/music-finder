import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import Home from "./components/Home/Home";
import Artist from "./components/Artist/Artist";

function App() {
  return (
    <>
      <Router primary={false}>
        <Home path="/" />
        <Artist path="/artist/:artist_id" />
      </Router>
    </>
  );
}

export default App;
