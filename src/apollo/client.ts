import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://backend-uacraft.koyeb.app/graphql/",
  cache: new InMemoryCache(),
});

export default client;
