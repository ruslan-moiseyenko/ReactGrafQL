import { useLazyQuery } from "@apollo/client";
import { loader } from "graphql.macro";

const queryProfile = loader("./gql/queryProfile.graphql");

export const useQueryPetProfile = () => {
  const [getPetProfile, { loading, data, error }] = useLazyQuery(queryProfile);
  return { getPetProfile, loading, error, petProfile: data?.petById };
};
