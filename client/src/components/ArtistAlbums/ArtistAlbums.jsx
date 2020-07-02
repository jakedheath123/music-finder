import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "@reach/router";

import "./ArtistAlbums.css";

const ArtistAlbums = ({ artist_id }) => {
  const ALBUMS_QUERY = gql`
  query albumsQuery {
    artistAlbums(id: "${artist_id}") {
      id
      title
      cover_medium
      fans
      release_date
    }
  }
  `;

  const { loading, data } = useQuery(ALBUMS_QUERY);

  if (loading) return <p>Loading..</p>;

  const { artistAlbums } = data;

  return (
    <ul className="albums-list">
      {artistAlbums.map(album => {
        const { id, title, cover_medium, fans, release_date } = album;
        return (
          <li key={id}>
            <img src={cover_medium} alt="Album cover" />
            <Link to={`/album/${id}`}>
              <h3>{title}</h3>
            </Link>

            <h4>{fans}</h4>
            <h4>{release_date}</h4>
          </li>
        );
      })}
    </ul>
  );
};

export default ArtistAlbums;
