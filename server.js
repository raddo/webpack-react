const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const {buildSchema} = require("graphql");
const mysql = require("mysql");

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
    hello: () => "World"
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.use((request, response, next) => {
    request.mysqlDb = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "$r77m90l57",
        database: "test"
    });
    request.mysqlDb.connect();
    next();
});

app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');