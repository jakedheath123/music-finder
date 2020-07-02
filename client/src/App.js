import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import SingleArtistPage from "./components/SingleArtistPage/SingleArtistPage";
import SingleAlbum from "./components/SingleAlbum/SingleAlbum";

function App() {
  return (
    <>
      <Router primary={false}>
        <HomePage path="/" />
        <SingleArtistPage path="/artist/:artist_id" />
        <SingleAlbum path="/album/:album_id" />
      </Router>
    </>
  );
}

export default App;
