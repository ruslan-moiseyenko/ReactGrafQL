import {ApolloClient, InMemoryCache,} from '@apollo/client';

const uri = 'https://funded-pet-library.moonhighway.com/';

export const apolloClient = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
  connectToDevTools : true
});