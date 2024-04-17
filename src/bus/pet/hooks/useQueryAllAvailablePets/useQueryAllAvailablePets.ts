import { useLazyQuery } from "@apollo/client";
import { loader } from "graphql.macro";

const queryAllPets = loader("./gql/queryAllAvailablePets.graphql");

export const useQueryAllAvailablePets = () => {
  const [getAllAvailablePets, { data, loading, error }] =
    useLazyQuery(queryAllPets);
  return { getAllAvailablePets, loading, error, pets: data?.allAvailablePets };
};
