import { useMutation } from "@apollo/client";
import { loader } from "graphql.macro";

const mutationCreateUser = loader("./gql/mutationCreateUser.graphql");

type CustomerType = {
  name: string;
  username: string;
  password: string;
};

export const useCustomer = (values: CustomerType) => {
  const [createAccount, { data }] = useMutation(mutationCreateUser);

  const save = () => {
    createAccount({
      variables: { input: values }
    });
  };

  return { save, userData: data?.createAccount };
};
