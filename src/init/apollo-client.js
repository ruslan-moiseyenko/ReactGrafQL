import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import { onError } from "@apollo/client/link/error";

const uri = "https://funded-pet-library.moonhighway.com/";

const httpLink = new HttpLink({ uri });

const authLink = setContext((_, { Headers }) => {
  const token = localStorage.getItem("loginToken");

  return {
    headers: {
      ...Headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
});
