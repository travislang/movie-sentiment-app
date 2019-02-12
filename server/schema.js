const { ApolloServer, gql } = require('apollo-server-express');


module.exports = gql`
    type Genre {
        id: Int!
        name: String!
    }

    type Movie {
        name: String!
        id: Int!
        posterPath: String!
        genres: [Genre!]!
        overview: String!
        releaseDate: String!
    }

    type Query {
        genre(movieId: Int!): Genre!
        getGenres: [Genre!]!
        getPopularMovies(page: Int = 1): [Movie!]!
        movieDetails(movieId: Int!): Movie!
        searchMovie(title: String!): [Movie]!
    }
`;

