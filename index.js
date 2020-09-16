const {
  ApolloServer
} = require("apollo-server");

const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "./.env"),
});

const models = require("./models");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/revolvers");

const server = new ApolloServer({
  cors: {
    origin: "*",
    credentials: true,
  },
  typeDefs,
  resolvers,
  context: {
    models
  },
  playground: true
});

server
  .listen({
    port: process.env.PORT || 4000,
  })
  .then(({
    url
  }) => {
    console.log(`Server started at ${url}`);
  });