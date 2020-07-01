import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import "./ArtistAlbums.css";

const ArtistAlbums = ({ artist_id }) => {
  const ALBUMS_QUERY = gql`
  query albumsQuery {
    artistAlbums(id: "${artist_id}") {
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
      {artistAlbums.map((album, index) => {
        const { title, cover_medium, fans, release_date } = album;
        return (
          <li key={index}>
            <img src={cover_medium} alt="Album cover" />
            <h4>{title}</h4>
            <p>{fans}</p>
            <p>{release_date}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ArtistAlbums;
