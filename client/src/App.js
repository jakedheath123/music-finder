import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import SingleArtist from "./components/SingleArtist/SingleArtist";
import SingleAlbumPage from "./components/SingleAlbumPage/SingleAlbumPage";

function App() {
  return (
    <>
      <Router primary={false}>
        <HomePage path="/" />
        <SingleArtist path="/artist/:artist_id" />
        <SingleAlbumPage path="/album/:album_id" />
      </Router>
    </>
  );
}

export default App;
