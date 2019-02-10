const { ApolloServer, gql } = require('apollo-server-express');


module.exports = gql`
    type Genre {
        id: Int!
        name: String!
    }

    type Query {
        genre(id: Int!): Genre!
        getGenres: [Genre!]!
    }
`;

