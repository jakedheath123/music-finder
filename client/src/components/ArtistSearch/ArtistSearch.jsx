import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Loader from "../Loader/Loader";
import SearchForm from "../SearchForm/SearchForm";
import ArtistSearchCard from "./ArtistSearchCard";

const ArtistSearch = () => {
  const [artist, setArtist] = useState("");

  const ARTIST_QUERY = gql`
    query artistQuery {
      artist(name: "${artist}") {
        name
        id
        picture_big
      }
    }
  `;

  const { loading, data } = useQuery(ARTIST_QUERY);

  return (
    <>
      <SearchForm searchByArtist={query => setArtist(query)} />
      {loading ? <Loader /> : <ArtistSearchCard data={data} />}
    </>
  );
};

export default ArtistSearch;
