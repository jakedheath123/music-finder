import React from "react";
import { Link } from "@reach/router";

import "./SingleAlbumTrack.css";

const SingleAlbumTrack = ({ data: { albumTracks } }) => {
  return (
    <main className="album-track-container">
      <Link to={`/artist/${albumTracks[0].artist.id}`} className="icon">
        <i className="far fa-arrow-alt-circle-left fa-2x" />
      </Link>
      <ul>
        {albumTracks.map(track => {
          const { id, title_short, track_position, preview } = track;
          return (
            <li key={id} className="single-album-list">
              <h1>
                {track_position} : {title_short}
              </h1>
              <iframe title={title_short} frameBorder="0" src={preview} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default SingleAlbumTrack;
