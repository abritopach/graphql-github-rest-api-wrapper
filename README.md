# Graphql-Github-Rest-Api-Wrapper

Sample project that shows how to wrapping a REST API with a GraphQL schema. We’ll go with the GitHub API.
This project is simply an example of how to wrapping a REST API. GitHub has its own [GraphQL API](https://developer.github.com/v4/) 
which is what we should use in a project.

    AVAILABLE QUERY:
        * Most starred Javascript repositories in GitHub.

This project has been developed to practice my skills with the tech stack:

GraphQL over REST with Node, Express and Apollo Engine.

NOTE: This project is a simple example of a concept test.

## Running

Before you go through this example, you should have at least a basic understanding of GraphQL concepts. You must also already have node installed on your machine.

* Test:

To run it, cd into `graphql-github-rest-api-wrapper` and run:

```bash
npm install
npm start
```

Open http://localhost:3000/graphiql and test query.

You can certainly accomplish terminating engineproxy via killing the parent node process. When I have a dangling engineproxy process on my dev machine, I generally just kill it using 

kill $(ps aux | grep '[e]ngineproxy.*' | awk '{print $2}')

## Requirements

* [Node.js](http://nodejs.org/)
