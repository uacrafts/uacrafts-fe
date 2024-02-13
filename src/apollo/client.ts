import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
const graphqlServerUrl = "https://uacraft-be.vercel.app/graphql/";

const httpLink = createHttpLink({
  uri: corsAnywhereUrl + graphqlServerUrl,
  fetchOptions: {
    mode: "cors", // Make sure 'cors' mode is set
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
