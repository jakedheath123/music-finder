import React from "react";

import "./HomePage.css";
import ChartArtistsList from "../ChartArtistsList/ChartArtistsList";
import ArtistSearch from "../ArtistSearch/ArtistSearch";

const HomePage = () => {
  return (
    <main className="home-container">
      <section className="home-chart-artists">
        <ChartArtistsList />
      </section>
      <ArtistSearch />
    </main>
  );
};

export default HomePage;
