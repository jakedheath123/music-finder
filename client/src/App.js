import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import SingleArtistPage from "./components/SingleArtist/SingleArtistPage";
import SingleAlbumPage from "./components/SingleAlbum/SingleAlbumPage";

function App() {
  return (
    <>
      <Router primary={false}>
        <MainPage path="/" />
        <SingleArtistPage path="/artist/:artist_id" />
        <SingleAlbumPage path="/album/:album_id" />
      </Router>
    </>
  );
}

export default App;
