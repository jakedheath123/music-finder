import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "@reach/router";

import "./ChartArtistsList.css";

const ChartArtistsList = () => {
  const CHART_ARTISTS_QUERY = gql`
    query {
      chartArtists {
        id
        name
        picture_big
      }
    }
  `;

  const { loading, data } = useQuery(CHART_ARTISTS_QUERY);

  if (loading) return <p>Loading...</p>;

  const { chartArtists } = data;

  return (
    <section>
      <ul className="chart-list">
        {chartArtists.map(artist => {
          const { id, name, picture_big } = artist;
          return (
            <li key={id}>
              <Link to={`/artist/${id}`}>
                <img src={picture_big} alt="Artist cover" />
              </Link>
              <h1>{name}</h1>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ChartArtistsList;
