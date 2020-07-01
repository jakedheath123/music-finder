import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import "./ArtistTopTracks.css";

const ArtistTopTracks = ({ artist_id }) => {
  const ARTIST_TOP_TRACKS_QUERY = gql`
  query artistTopTracksQuery {
    topArtistTracks(id: "${artist_id}") {
      title_short
      preview
      contributors {
        name
      }
    }
  }
  `;

  const { loading, data } = useQuery(ARTIST_TOP_TRACKS_QUERY);

  if (loading) return <p>Loading</p>;

  const { topArtistTracks } = data;

  return (
    <>
      <h2>Top Tracks</h2>
      <ul className="tracks-list">
        {topArtistTracks.map(track => {
          const { title_short, preview, contributors } = track;
          return (
            <li key={title_short}>
              <h3>{title_short}</h3>
              <audio controls>
                <source src={preview} type="audio/ogg" />
              </audio>
              {contributors.length > 3 ? (
                <p>{contributors[0].name}</p>
              ) : (
                contributors.map((contributor, index) => {
                  const { name } = contributor;
                  return <p key={index}>{name}</p>;
                })
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ArtistTopTracks;
