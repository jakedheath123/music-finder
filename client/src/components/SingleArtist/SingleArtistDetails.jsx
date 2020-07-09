import React from "react";
import { Link } from "@reach/router";

import "./SingleArtistDetails.css";
import ArtistTopTracks from "../ArtistTopTracks/ArtistTopTracks";
import ArtistAlbums from "../ArtistAlbums/ArtistAlbums";
import ArtistComments from "../ArtistComments/ArtistComments";

const SingleArtistDetails = ({
  data: {
    artist: { name, picture_big }
  },
  artist_id
}) => {
  return (
    <main className="single-artist-container">
      <section className="single-artist-bio">
        <h1>{name}</h1>
        <img src={picture_big} alt="Artist cover" />
        <Link to="/">
          <button>Back</button>
        </Link>
      </section>
      <section className="single-artist-tracks">
        <ArtistTopTracks artist_id={artist_id} />
      </section>
      <section className="single-artist-albums">
        <ArtistAlbums artist_id={artist_id} />
      </section>
      <section className="single-artist-comments">
        <ArtistComments artist_id={artist_id} />
      </section>
    </main>
  );
};

export default SingleArtistDetails;
