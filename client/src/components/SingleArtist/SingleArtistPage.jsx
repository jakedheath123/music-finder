import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Loader from "../Loader/Loader";
import SingleArtistDetails from "./SingleArtistDetails";

const SingleArtistPage = ({ artist_id }) => {
  const ARTIST_QUERY = gql`
    query artistQuery {
      artist(name: "${artist_id}") {
       name
       picture_big
   }
 }
 `;

  const { loading, data } = useQuery(ARTIST_QUERY);

  return loading ? (
    <Loader />
  ) : (
    <SingleArtistDetails data={data} artist_id={artist_id} />
  );
};

export default SingleArtistPage;
