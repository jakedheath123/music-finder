import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from "@reach/router";

import "./HomePage.css";
import SearchForm from "../SearchForm/SearchForm";
import ChartArtistsList from "../ChartArtistsList/ChartArtistsList";

const HomePage = () => {
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

  if (loading) return <p>Loading</p>;

  const { name, picture_big, id } = data.artist;

  return (
    <main className="home-container">
      <section className="home-chart-artists">
        <ChartArtistsList />
      </section>
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
    </main>
  );
};

export default HomePage;
