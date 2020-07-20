import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "@reach/router";

import "./ArtistAlbums.css";
import Loader from "../Loader/Loader";

const ArtistAlbums = ({ artist_id }) => {
  const ALBUMS_QUERY = gql`
  query albumsQuery {
    artistAlbums(id: "${artist_id}") {
      id
      title
      cover_medium
    }
  }
  `;

  const { loading, data } = useQuery(ALBUMS_QUERY);

  if (loading) return <Loader />;

  const { artistAlbums } = data;

  return (
    <ul className="albums-list">
      {artistAlbums.map(album => {
        const { id, title, cover_medium } = album;
        return (
          <li key={id}>
            <img src={cover_medium} alt="Album cover" />
            <Link to={`/album/${id}`} className="album-link">
              <h3>{title}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ArtistAlbums;
