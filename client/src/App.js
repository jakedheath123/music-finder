import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import Home from "./components/Home/Home";
import SingleArtist from "./components/SingleArtist/SingleArtist";
import SingleAlbum from "./components/SingleAlbum/SingleAlbum";

function App() {
  return (
    <>
      <Router primary={false}>
        <Home path="/" />
        <SingleArtist path="/artist/:artist_id" />
        <SingleAlbum path="/album/:album_id" />
      </Router>
    </>
  );
}

export default App;
