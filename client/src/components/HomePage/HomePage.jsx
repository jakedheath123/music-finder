import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const HomePage = () => {
  const artist = "coldplay";

  const ARTIST_QUERY = gql`
    query {
      artist(name: "${artist}") {
        name
        id
        picture_big
      }
    }
  `;

  const { loading, error, data } = useQuery(ARTIST_QUERY);

  console.log(data);

  return <div></div>;
};

export default HomePage;
