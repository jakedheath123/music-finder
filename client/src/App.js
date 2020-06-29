import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ArtistPage from "./components/ArtistPage/ArtistPage";

function App() {
  return (
    <>
      <Router primary={false}>
        <HomePage path="/" />
        <ArtistPage path="/artist:artist_id" />
      </Router>
    </>
  );
}

export default App;
