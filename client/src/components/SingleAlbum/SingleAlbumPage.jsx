import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import SingleAlbumTrack from "./SingleAlbumTrack";
import Loader from "../Loader/Loader";

const SingleAlbum = ({ album_id }) => {
  const ALBUM_TRACKS_QUERY = gql`
  query albumTracksQuery {
    albumTracks(id: ${album_id}) {
      id
      title_short
      track_position
      preview
      artist {
        id
      }
    }
  }
  `;

  const { loading, data } = useQuery(ALBUM_TRACKS_QUERY);

  return loading ? <Loader /> : <SingleAlbumTrack data={data} />;
};

export default SingleAlbum;
