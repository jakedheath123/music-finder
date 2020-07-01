import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import Home from "./components/Home/Home";
import SingleArtist from "./components/SingleArtist/SingleArtist";

function App() {
  return (
    <>
      <Router primary={false}>
        <Home path="/" />
        <SingleArtist path="/artist/:artist_id" />
      </Router>
    </>
  );
}

export default App;
