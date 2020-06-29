import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <>
      <Router primary={false}>
        <HomePage path="/" />
      </Router>
    </>
  );
}

export default App;
