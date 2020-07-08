import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from "@reach/router";

import Loader from "../Loader/Loader";
import SearchForm from "../SearchForm/SearchForm";

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

  if (loading) return <Loader />;

  const { name, picture_big, id } = data.artist;

  return (
    <div>
      <SearchForm
        searchByArtist={query => setArtist(query)}
        className="home-search"
      />
      <section className="home-content">
        {picture_big ? (
          <Link to={`/artist/${id}`}>
            <img src={picture_big} alt="Artist cover" />
          </Link>
        ) : null}
        <h1>{name}</h1>
      </section>
    </div>
  );
};

export default ArtistSearch;
