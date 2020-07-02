import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const ArtistComments = ({ artist_id }) => {
  const ARTIST_COMMENTS_QUERY = gql`
  query artistCommentsQuery {
    artistComments(id: "${artist_id}") {
      text
      id
    }
  }
  `;

  const { loading, data } = useQuery(ARTIST_COMMENTS_QUERY);

  if (loading) return <p>Loading..</p>;

  const { artistComments } = data;
  return (
    <ul>
      {artistComments.map(comment => {
        const { text, id } = comment;
        return (
          <li key={id}>
            <p>" {text} "</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ArtistComments;
