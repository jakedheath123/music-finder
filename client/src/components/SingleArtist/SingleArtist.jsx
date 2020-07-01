import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import "./SingleArtist.css";
import ArtistAlbums from "../ArtistAlbums/ArtistAlbums";
import ArtistTopTracks from "../ArtistTopTracks/ArtistTopTracks";

const ArtistPage = ({ artist_id }) => {
  const ARTIST_QUERY = gql`
    query {
      artist(name: "${artist_id}") {
      name,
       picture_big
   }
 }
 `;

  const { loading, data } = useQuery(ARTIST_QUERY);

  if (loading) return <p>Loading..</p>;

  const { name, picture_big } = data.artist;

  return (
    <main className="single-artist-container">
      <section className="single-artist-head">
        <h1>{name}</h1>
        <img src={picture_big} alt="Artist cover" />
      </section>
      <ArtistTopTracks artist_id={artist_id} className="single-artist-tracks" />
      <ArtistAlbums artist_id={artist_id} className="single-artist-albums" />
    </main>
  );
};

export default ArtistPage;
