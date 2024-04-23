import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';

const uri = 'https://funded-pet-library.moonhighway.com/';

const link = new HttpLink({uri});

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools : true
});