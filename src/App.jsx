import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { Pet } from './components/Pet';

const GET_PETS_QUANTITY = gql`
  query getPetsQuantity{
  availablePets
}
`;

function App() {
  const { loading, error, data } = useQuery(GET_PETS_QUANTITY);

  return (

    <div className="App">
      <h1>Welcome to my React with GraphQL App!</h1>
      <Pet />

    </div>
  );
}

export { App };
