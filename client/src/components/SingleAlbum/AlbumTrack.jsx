import React from "react";
import { Link } from "@reach/router";

import "./AlbumTrack.css";

const AlbumTrack = ({ data: { albumTracks } }) => {
  return (
    <main className="album-track-container">
      <ul>
        <Link to={`/artist/${albumTracks[0].artist.id}`}>
          <button>Back</button>
        </Link>
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
                style={{
                  margin: "0",
                  padding: "0.5rem",
                  border: "none",
                  width: "200px",
                  height: "100px"
                }}
              ></iframe>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default AlbumTrack;
