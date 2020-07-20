import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Loader from "../Loader/Loader";
import ChartArtistsList from "../ChartArtists/ChartArtistsList";
import ArtistSearch from "../ArtistSearch/ArtistSearch";

const MainPage = () => {
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

  return loading ? (
    <Loader />
  ) : (
    <>
      <ChartArtistsList data={data} />
      <ArtistSearch />
    </>
  );
};

export default MainPage;
