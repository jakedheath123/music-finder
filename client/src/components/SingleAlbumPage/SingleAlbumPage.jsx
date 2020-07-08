import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "@reach/router";

import "./SingleAlbumPage.css";
import Loader from "../Loader/Loader";

const SingleAlbum = ({ album_id }) => {
  const ALBUM_TRACKS_QUERY = gql`
  query albumTracksQuery {
    albumTracks(id: ${album_id}) {
      id
      title_short
      track_position
      preview
      artist {
        id
      }
    }
  }
  `;

  const { loading, data } = useQuery(ALBUM_TRACKS_QUERY);

  if (loading) return <Loader />;

  const { albumTracks } = data;

  return (
    <main className="single-album-container">
      <ul className="single-album-list">
        <Link to={`/artist/${albumTracks[0].artist.id}`}>
          <button>Back</button>
        </Link>
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
