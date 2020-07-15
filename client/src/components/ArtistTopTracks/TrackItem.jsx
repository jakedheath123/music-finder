import React from "react";

import "./TrackItem.css";

const TrackItem = ({ data: { topArtistTracks } }) => {
  return (
    <div className="track-item-container">
      <h2 style={{ marginBottom: "1rem" }}>Top Tracks</h2>
      <ul>
        {topArtistTracks.map(track => {
          const { title_short, preview, contributors } = track;
          return (
            <li key={title_short}>
              <h3>{title_short}</h3>
              <iframe
                title={title_short}
                frameBorder="0"
                src={preview}
              ></iframe>
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
    </div>
  );
};

export default TrackItem;
