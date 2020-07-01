import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import SingleArtistPage from "./components/SingleArtistPage/SingleArtistPage";

function App() {
  return (
    <>
      <Router primary={false}>
        <HomePage path="/" />
        <SingleArtistPage path="/artist/:artist_id" />
      </Router>
    </>
  );
}

export default App;
