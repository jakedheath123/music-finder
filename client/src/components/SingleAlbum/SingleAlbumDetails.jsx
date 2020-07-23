import React from "react";
import { Link } from "@reach/router";

const SingleAlbumTrack = ({
  data: {
    singleAlbum: {
      title,
      release_date,
      explicit_lyrics,
      fans,
      cover_medium,
      artist: { name, picture_big, id },
      tracks: { data }
    }
  }
}) => {
  return (
    <main className="album-details-container">
      <div className="home-link">
        <Link to="/" className="artist-link">
          <h3>Home</h3>
        </Link>
      </div>
      <div className="album-image">
        <img src={cover_medium} alt="Album Cover" />
      </div>
      <div className="album-details">
        {explicit_lyrics ? <h5>EXPLICIT</h5> : null}
        <h1>{title}</h1>
        <div>
          <img src={picture_big} alt="Artist Avatar" />
          <Link to={`/artist/${id}`} className="artist-link">
            <h2>{name}</h2>
          </Link>
        </div>
        <p>{`${data.length} tracks - ${release_date} - ${fans} fans`}</p>
      </div>
      <div className="album-tracks">
        <ul>
          {data.map((track, index) => {
            const { id, title_short, preview } = track;
            return (
              <li key={id}>
                <h1>
                  {`${index + 1}`} : {title_short}
                </h1>
                <iframe title={title_short} frameBorder="0" src={preview} />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default SingleAlbumTrack;
