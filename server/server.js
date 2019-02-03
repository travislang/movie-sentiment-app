const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const GraphQL = require('graphql');

const app = express();

const PORT = process.env.PORT || 5000;

app.use('graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log('server listening on port', PORT);
})