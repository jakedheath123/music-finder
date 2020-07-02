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

const ArtistAlbumsType = new GraphQLObjectType({
  name: "ArtistAlbums",
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
    artistAlbums: {
      type: new GraphQLList(ArtistAlbumsType),
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
    topArtistTracks: {
      type: new GraphQLList(TopArtistTracksType),
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.deezer.com/artist/${args.id}/top`)
          .then(response => response.data.data);
      }
    },
    artistComments: {
      type: new GraphQLList(ArtistCommentsType),
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.deezer.com/artist/${args.id}/comments`)
          .then(response => response.data.data);
      }
    }
  }
});

// const mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     addArtistComment
//   }
// })

module.exports = new GraphQLSchema({
  query: RootQuery
});
