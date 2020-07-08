import React from "react";
import { Link } from "@reach/router";

import "./AlbumTrack.css";

const AlbumTrack = ({ data: { albumTracks } }) => {
  console.log(albumTracks);
  return (
    <main>
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

export default AlbumTrack;
