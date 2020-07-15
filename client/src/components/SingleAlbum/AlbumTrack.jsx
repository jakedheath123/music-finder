import React from "react";
import { Link } from "@reach/router";

import "./AlbumTrack.css";

const AlbumTrack = ({ data: { albumTracks } }) => {
  return (
    <main className="album-track-container">
      <Link to={`/artist/${albumTracks[0].artist.id}`}>
        <button>Back</button>
      </Link>
      <ul>
        {albumTracks.map(track => {
          const { id, title_short, track_position, preview } = track;
          return (
            <li key={id} className="single-album-list">
              <h1>
                {track_position} : {title_short}
              </h1>
              <iframe
                title={title_short}
                frameBorder="0"
                src={preview}
              ></iframe>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default AlbumTrack;
