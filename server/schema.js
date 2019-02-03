const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')

// Movie Type
const MovieType = new GraphQLObjectType({
    name: 'movie',
    fields: () => ({
        id: { type: GraphQLInt},
        poster_path: { type: GraphQLString},
        original_title: { type: GraphQLString},
        genres: {
            type: new GraphQLList(GenreType),
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parentValue, args){
                return axios.get
            }
        }
    })
})

//Genre Type
const GenreType = new GraphQLObjectType({
    name: 'Genre',
    fields: () => ({
        id: { type: GraphQLInt },
        genre_name: { type: GraphQLString }
    })
})

// GRAPHQL SCHEMA
