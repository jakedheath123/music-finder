import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import "./ArtistTopTracks.css";
import Loader from "../Loader/Loader";

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

  if (loading) return <Loader />;

  const { topArtistTracks } = data;

  return (
    <>
      <h2>Top Tracks</h2>
      <ul>
        {topArtistTracks.map(track => {
          const { title_short, preview, contributors } = track;
          return (
            <li key={title_short}>
              <h3>{title_short}</h3>
              <audio controls>
                <source src={preview} type="audio/ogg" />
              </audio>
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

export default ArtistTopTracks;
