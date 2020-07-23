import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "@reach/router";

import Loader from "../Loader/Loader";

const ArtistAlbums = ({ artist_id }) => {
  const ALBUMS_QUERY = gql`
  query albumsQuery {
    artistAlbums(id: "${artist_id}") {
      id
      title
      cover_medium
      release_date
      explicit_lyrics
    }
  }
  `;

  const { loading, data } = useQuery(ALBUMS_QUERY);

  if (loading) return <Loader />;

  const { artistAlbums } = data;

  return (
    <ul className="albums-list">
      {artistAlbums.map(album => {
        const {
          id,
          title,
          cover_medium,
          release_date,
          explicit_lyrics
        } = album;
        return (
          <li key={id}>
            <Link to={`/album/${id}`} className="album-link">
              <img src={cover_medium} alt="Album cover" />
            </Link>
            <h3>{title}</h3>
            <h4>Released on {release_date}</h4>
            {explicit_lyrics ? <p>Explicit</p> : null}
          </li>
        );
      })}
    </ul>
  );
};

export default ArtistAlbums;
