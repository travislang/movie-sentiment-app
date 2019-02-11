const { ApolloServer, gql } = require('apollo-server-express');


module.exports = gql`
    type Genre {
        id: Int!
        name: String!
    }

    type Movie {
        name: String!
        posterPath: String!
        genres: [Genre!]!
        overview: String!
        releaseDate: String!
    }

    type Query {
        genre(id: Int!): Genre!
        getGenres: [Genre!]!
        getPopularMovies: [Movie!]!
    }
`;

