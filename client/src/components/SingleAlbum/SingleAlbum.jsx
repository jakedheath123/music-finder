import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import "./SingleAlbum.css";

const SingleAlbum = ({ album_id }) => {
  const ALBUM_TRACKS_QUERY = gql`
  query albumTracksQuery {
    albumTracks(id: ${album_id}) {
      id
      title_short
      track_position
      preview
    }
  }
  `;

  const { loading, data } = useQuery(ALBUM_TRACKS_QUERY);

  if (loading) return <p>Loading</p>;

  const { albumTracks } = data;

  return (
    <main className="single-album-container">
      <ul className="single-album-list">
        {albumTracks.map(track => {
          const { id, title_short, track_position, preview } = track;
          return (
            <li key={id}>
              <h1>
                {track_position} : {title_short}
              </h1>
              <audio controls>
                <source src={preview} type="audio/ogg" />
              </audio>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default SingleAlbum;
