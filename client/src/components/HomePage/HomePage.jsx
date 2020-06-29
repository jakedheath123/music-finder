import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import "./HomePage.css";
import SearchForm from "../SearchForm/SearchForm";

const HomePage = () => {
  const [artistSearch, setArtistSearch] = useState(null);

  const ARTIST_QUERY = gql`
    query {
      artist(name: "${artistSearch}") {
        name
        id
        picture_big
      }
    }
  `;

  const searchByArtist = userInput => {
    setArtistSearch(userInput);
  };

  const { loading, data } = useQuery(ARTIST_QUERY);

  if (!data) return null;
  if (loading) return <p>Loading</p>;

  const { name, picture_big } = data.artist;

  return (
    <main className="home-container">
      <div className="home-search">
        <SearchForm searchByArtist={searchByArtist} />
      </div>
      <div className="home-content">
        {picture_big ? <img src={picture_big} alt="Artist cover" /> : null}
        <h1>{name}</h1>
      </div>
    </main>
  );
};

export default HomePage;
