import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "@reach/router";

import "./ChartArtistsList.css";
import Loader from "../Loader/Loader";

const ChartArtistsList = () => {
  const CHART_ARTISTS_QUERY = gql`
    query chartArtistsQuery {
      chartArtists {
        id
        name
        picture_big
        position
      }
    }
  `;

  const { loading, data } = useQuery(CHART_ARTISTS_QUERY);

  if (loading) return <Loader />;

  const { chartArtists } = data;

  return (
    <ul className="chart-list">
      {chartArtists.map(artist => {
        const { id, name, picture_big, position } = artist;
        return (
          <li key={id}>
            <h2>{position}</h2>
            <Link to={`/artist/${id}`}>
              <img src={picture_big} alt="Artist cover" />
            </Link>
            <h1>{name}</h1>
          </li>
        );
      })}
    </ul>
  );
};

export default ChartArtistsList;
