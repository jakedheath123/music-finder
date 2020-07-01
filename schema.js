const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLString
} = require("graphql");

const ArtistType = new GraphQLObjectType({
  name: "Artist",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    picture_big: { type: GraphQLString }
  })
});

const AlbumsType = new GraphQLObjectType({
  name: "Albums",
  fields: () => ({
    title: { type: GraphQLString },
    cover_medium: { type: GraphQLString },
    fans: { type: GraphQLInt },
    release_date: { type: GraphQLString }
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

const TopTracksType = new GraphQLObjectType({
  name: "TopTracks",
  fields: () => ({
    title_short: { type: GraphQLString },
    preview: { type: GraphQLString },
    contributors: { type: TrackContributorsListType }
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
          .then(response => response.data);
      }
    },
    albums: {
      type: new GraphQLList(AlbumsType),
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.deezer.com/artist/${args.id}/albums`)
          .then(response => response.data.data);
      }
    },
    chartArtists: {
      type: new GraphQLList(ChartArtistsType),
      resolve(parent, args) {
        return axios
          .get("https://api.deezer.com/chart/0/artists")
          .then(response => response.data.data);
      }
    },
    topTracks: {
      type: new GraphQLList(TopTracksType),
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.deezer.com/artist/${args.id}/top`)
          .then(response => response.data.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
