import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Loader from "../Loader/Loader";
import "./ArtistComments.css";
import { commentsCheck } from "../../utils/utils";

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

  return loading ? (
    <Loader />
  ) : (
    <ul className="artist-comments">
      {commentsCheck(data.artistComments).map(comment => {
        const { text, id } = comment;
        return (
          <li key={id}>
            <p>{`" ${text} "`}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ArtistComments;
