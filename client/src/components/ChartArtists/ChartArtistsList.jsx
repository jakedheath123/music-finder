import React from "react";

import "./ChartArtistsList.css";
import ChartArtistsItem from "./ChartArtistsItem";

const ChartArtistList = ({ data: { chartArtists } }) => {
  return (
    <section>
      <ul className="chart-list">
        {chartArtists.map(artist => {
          const { id } = artist;
          return <ChartArtistsItem key={id} artist={artist} />;
        })}
      </ul>
    </section>
  );
};

export default ChartArtistList;
