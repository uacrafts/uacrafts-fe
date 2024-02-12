import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://uacraft-be-git-uac-5-uac-14-dmytros-projects-b07917bd.vercel.app/graphql/",
  cache: new InMemoryCache(),
});

export default client;
