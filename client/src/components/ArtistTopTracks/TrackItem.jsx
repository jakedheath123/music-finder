import React from "react";

const TrackItem = ({ data: { topArtistTracks } }) => {
  return (
    <>
      <h2 style={{ marginBottom: "1rem" }}>Top Tracks</h2>
      <ul className="track-item-container">
        {topArtistTracks.map(track => {
          const { title_short, preview, contributors } = track;
          return (
            <li key={title_short}>
              <p>{title_short}</p>
              <iframe title={title_short} frameBorder="0" src={preview} />
              {contributors.length > 3 ? (
                <h4>{contributors[0].name}</h4>
              ) : (
                contributors.map((contributor, index) => {
                  const { name } = contributor;
                  return <h4 key={index}>{name}</h4>;
                })
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TrackItem;
