import React from "react";

import "./HomePage.css";
import ChartArtists from "../ChartArtists/ChartArtists";
import ArtistSearch from "../ArtistSearch/ArtistSearch";

const HomePage = () => {
  return (
    <main>
      <ChartArtists />
      <ArtistSearch />
    </main>
  );
};

export default HomePage;
