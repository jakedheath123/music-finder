import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const HomePage = () => {
  const [artistSearch, setArtistSearch] = useState("");

  const ARTIST_QUERY = gql`
    query {
      artist(name: "") {
        name
        id
        picture_big
      }
    }
  `;

  const { loading, error, data } = useQuery(ARTIST_QUERY);

  return (
    <div>
      <form>
        <label>
          Search Artist:
          <input type="text" />
        </label>
      </form>
    </div>
  );
};

export default HomePage;
