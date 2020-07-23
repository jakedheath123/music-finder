const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean
} = require("graphql");

const ArtistType = new GraphQLObjectType({
  name: "Artist",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    picture_big: { type: GraphQLString }
  })
});

const ArtistAlbumsType = new GraphQLObjectType({
  name: "ArtistAlbums",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    cover_medium: { type: GraphQLString },
    fans: { type: GraphQLInt },
    release_date: { type: GraphQLString },
    explicit_lyrics: { type: GraphQLBoolean }
  })
});

const ChartArtistsType = new GraphQLObjectType({
  name: "ChartArtists",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    picture_big: { type: GraphQLString },
    position: { type: GraphQLInt }
  })
});

const TopArtistTracksType = new GraphQLObjectType({
  name: "TopArtistTracks",
  fields: () => ({
    title_short: { type: GraphQLString },
    preview: { type: GraphQLString },
    contributors: { type: TrackContributorsListType }
  })
});

const ArtistCommentsType = new GraphQLObjectType({
  name: "ArtistComments",
  fields: () => ({
    id: { type: GraphQLInt },
    text: { type: GraphQLString },
    date: { type: GraphQLInt }
  })
});

const SingleAlbumType = new GraphQLObjectType({
  name: "SingleAlbum",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    cover_medium: { type: GraphQLString },
    release_date: { type: GraphQLString },
    explicit_lyrics: { type: GraphQLBoolean },
    fans: { type: GraphQLInt },
    duration: { type: GraphQLInt },
    artist: { type: ArtistType },
    tracks: { type: DataObjectType }
  })
});

const DataObjectType = new GraphQLObjectType({
  name: "DataObject",
  fields: () => ({
    data: { type: SingleAlbumTracksListType }
  })
});

const SingleAlbumTracksType = new GraphQLObjectType({
  name: "SingleAlbumTracks",
  fields: () => ({
    id: { type: GraphQLString },
    title_short: { type: GraphQLString },
    explicit_lyrics: { type: GraphQLBoolean },
    preview: { type: GraphQLString },
    artist: { type: AlbumArtistType }
  })
});

const SingleAlbumTracksListType = new GraphQLList(SingleAlbumTracksType);

const AlbumArtistType = new GraphQLObjectType({
  name: "AlbumArtist",
  fields: () => ({
    id: { type: GraphQLString }
  })
});

const TrackContributorsType = new GraphQLObjectType({
  name: "TrackContributors",
  fields: () => ({
    name: { type: GraphQLString }
  })
});

const TrackContributorsListType = new GraphQLList(TrackContributorsType);

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    artist: {
      type: ArtistType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.deezer.com/artist/${args.name}`)
          .then(({ data }) => data);
      }
    },
    artistAlbums: {
      type: new GraphQLList(ArtistAlbumsType),
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.deezer.com/artist/${args.id}/albums`)
          .then(({ data: { data } }) => data);
      }
    },
    chartArtists: {
      type: new GraphQLList(ChartArtistsType),
      resolve(parent, args) {
        return axios
          .get("https://api.deezer.com/chart/0/artists")
          .then(({ data: { data } }) => data);
      }
    },
    topArtistTracks: {
      type: new GraphQLList(TopArtistTracksType),
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.deezer.com/artist/${args.id}/top`)
          .then(({ data: { data } }) => data);
      }
    },
    artistComments: {
      type: new GraphQLList(ArtistCommentsType),
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.deezer.com/artist/${args.id}/comments?limit=4`)
          .then(({ data: { data } }) => data);
      }
    },
    singleAlbum: {
      type: SingleAlbumType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.deezer.com/album/${args.id}`)
          .then(({ data }) => data);
      }
    }
  }
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addArtistComment: {
      type: ArtistCommentsType,
      args: {
        text: { type: new GraphQLNonNull(GraphQLString) },
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .post(`https://api.deezer.com/artist/${args.id}/comments`, {
            text: args.text
          })
          .then(({ data }) => data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});
