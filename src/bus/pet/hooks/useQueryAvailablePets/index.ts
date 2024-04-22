import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

const queryAvailablePets = loader("./gql/queryAvailablePets.graphql");

export const useQueryAvailablePets = () => {
  return useQuery(queryAvailablePets, { pollInterval: 10000 });
  //you can use pllInterval to set interval for query
  // return useQuery(queryAvailablePets, { pollInterval: 10000 });
};
