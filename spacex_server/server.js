const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js');

const app = express();

//Graphql uses a single endpoint with a defined schema that specifies how to not only fetch data but also mutate, or change, data.
//where as REST API uses different endpoints CRUD - CREATE, READ, UPDATE, DELETE
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true //gives you graphiql tool to write query, if not neede :false
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));