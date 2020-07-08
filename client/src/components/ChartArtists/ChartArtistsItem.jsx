import React from "react";
import { Link } from "@reach/router";

const ChartArtistsItem = ({ artist: { id, position, picture_big, name } }) => {
  return (
    <li key={id}>
      <h2>{position}</h2>
      <Link to={`/artist/${id}`}>
        <img src={picture_big} alt="Artist cover" />
      </Link>
      <h1>{name}</h1>
    </li>
  );
};

export default ChartArtistsItem;
