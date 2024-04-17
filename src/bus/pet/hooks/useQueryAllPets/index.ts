import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

const queryAllPets = loader("./gql/queryAllPets.graphql");

export const useQueryAllPets = () => {
  const { data, loading, error } = useQuery(queryAllPets);
  const pets = data?.allPets;
  return { pets, loading, error };
};
