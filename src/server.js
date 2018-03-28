const express = require("express");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const bodyParser = require("body-parser");
const { ApolloEngine } = require("apollo-engine");

const { schema } = require("./graphql/schema");

const app = express();

app.post(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema,
    tracing: true,
    cacheControl: true,
  })
);

const gql = String.raw;

app.get(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql",
    query: gql`
      query {
        popularRepositoriesList {
          name
        }
      }
    `
  })
);

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;


// We start the server with Engine.

const engine = new ApolloEngine({
  apiKey: process.env.ENGINE_API_KEY,
  stores: [
    {
      name: "publicResponseCache",
      inMemory: {
        cacheSize: 10485760
      }
    }
  ],
  queryCache: {
    publicFullQueryStore: "publicResponseCache"
  }
});

// Start the app.
engine.listen(
  {
    port: PORT,
    expressApp: app
  },
  () => {
    console.log(`Go to http://localhost:${PORT}/graphiql to run queries!`);
  }
);