import React from "react";

import ChartArtistsItem from "./ChartArtistsItem";

const ChartArtistList = ({ data: { chartArtists } }) => {
  return (
    <main>
      <ul className="chart-list">
        {chartArtists.map(artist => {
          const { id } = artist;
          return <ChartArtistsItem key={id} artist={artist} />;
        })}
      </ul>
    </main>
  );
};

export default ChartArtistList;
