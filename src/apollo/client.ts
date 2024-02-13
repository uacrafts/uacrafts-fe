import { ApolloClient, InMemoryCache } from "@apollo/client";

// const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
// const graphqlServerUrl = "https://uacraft-be.vercel.app/graphql/";
//
// const httpLink = createHttpLink({
//   uri: corsAnywhereUrl + graphqlServerUrl,
//   fetchOptions: {
//     mode: "cors", // Make sure 'cors' mode is set
//   },
// });

const client = new ApolloClient({
  uri: "https://uacraft-be-git-uac-5-uac-14-dmytros-projects-b07917bd.vercel.app/graphql/",
  cache: new InMemoryCache(),
});

export default client;
