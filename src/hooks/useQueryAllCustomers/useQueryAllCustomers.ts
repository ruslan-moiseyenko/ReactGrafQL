import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

const queryAllCustomers = loader("./gql/queryAllCustomers.graphql");

export const useQueryAllCustomers = () => {
  const { data, loading, error } = useQuery(queryAllCustomers);
  const allCustomers = data?.allCustomers;
  return { allCustomers, loading, error };
};
