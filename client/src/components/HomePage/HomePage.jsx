import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from "@reach/router";

import "./HomePage.css";
import SearchForm from "../SearchForm/SearchForm";
import ChartArtistsList from "../ChartArtistsList/ChartArtistsList";

const HomePage = () => {
  const [artistSearch, setArtistSearch] = useState(null);

  const ARTIST_QUERY = gql`
    query artistQuery {
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

  if (loading) return <p>Loading</p>;

  const { name, picture_big, id } = data.artist;

  return (
    <main className="home-container">
      <section className="home-chart-artists">
        <ChartArtistsList />
      </section>
      <section className="home-search">
        <SearchForm searchByArtist={searchByArtist} />
      </section>
      <section className="home-content">
        {picture_big ? (
          <Link to={`/artist/${id}`}>
            <img src={picture_big} alt="Artist cover" />
          </Link>
        ) : null}
        <h1>{name}</h1>
      </section>
    </main>
  );
};

export default HomePage;
