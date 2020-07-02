import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const SingleAlbum = ({ album_id }) => {
  const ALBUM_TRACKS_QUERY = gql`
  query albumTracksQuery {
    albumTracks(id: ${album_id}) {
      title_short
      track_position
      explicit_lyrics
      preview
    }
  }
  `;

  const { loading, data } = useQuery(ALBUM_TRACKS_QUERY);

  if (loading) return <p>Loading</p>;

  const { albumTracks } = data;

  return (
    <main>
      <ul>
        {albumTracks.map(track => {
          const {
            title_short,
            track_position,
            explicit_lyrics,
            preview
          } = track;
          return (
            <li>
              <h1>{title_short}</h1>
              <h2>{track_position}</h2>
              <h3>{explicit_lyrics}</h3>
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
