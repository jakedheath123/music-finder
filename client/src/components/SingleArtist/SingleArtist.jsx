import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

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
    <main>
      <section>
        <h1>{name}</h1>
        <img src={picture_big} alt="Artist cover" />
      </section>
      <aside>
        <ArtistTopTracks artist_id={artist_id} />
      </aside>
      <section>
        <ArtistAlbums artist_id={artist_id} />
      </section>
    </main>
  );
};

export default ArtistPage;
