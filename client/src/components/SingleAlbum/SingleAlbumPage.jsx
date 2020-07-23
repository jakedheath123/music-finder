import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import SingleAlbumDetails from "./SingleAlbumDetails";
import Loader from "../Loader/Loader";

const SingleAlbum = ({ album_id }) => {
  const SINGLE_ALBUM_QUERY = gql`
  query singleAlbumQuery {
    singleAlbum(id: ${album_id}) {
      title
      cover_medium
      release_date
      explicit_lyrics
      fans
      artist {
        name
        picture_big
        id
      }
      tracks {
        data {
          title_short
          explicit_lyrics
          preview
          id
        }
      }
    }
  }
  `;

  const { loading, data } = useQuery(SINGLE_ALBUM_QUERY);

  return loading ? <Loader /> : <SingleAlbumDetails data={data} />;
};

export default SingleAlbum;
