import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Loader from "../Loader/Loader";
import TrackItem from "./TrackItem";

const ArtistTopTracks = ({ artist_id }) => {
  const ARTIST_TOP_TRACKS_QUERY = gql`
  query artistTopTracksQuery {
    topArtistTracks(id: "${artist_id}") {
      title_short
      preview
      contributors {
        name
      }
    }
  }
  `;

  const { loading, data } = useQuery(ARTIST_TOP_TRACKS_QUERY);

  return loading ? <Loader /> : <TrackItem data={data} />;
};

export default ArtistTopTracks;
