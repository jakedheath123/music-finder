import React from "react";
import { Link } from "@reach/router";

const ArtistSearchCard = ({
  data: {
    artist: { name, picture_big, id }
  }
}) => {
  return (
    <section className="artist-search-display">
      {picture_big ? (
        <Link to={`/artist/${id}`}>
          <img src={picture_big} alt="Artist cover" />
        </Link>
      ) : null}
      <h1>{name}</h1>
    </section>
  );
};

export default ArtistSearchCard;
