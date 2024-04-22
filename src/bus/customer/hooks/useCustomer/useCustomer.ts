import { useMutation } from "@apollo/client";
import { useState } from "react";
import { loader } from "graphql.macro";

const initialCustomerState = {
  account: {
    name: "",
    username: "",
    password: ""
  }
};

const mutationCreateUser = loader("./gql/mutationCreateUser.graphql");

export const useCustomer = () => {
  const [values, setValues] = useState(initialCustomerState);
  const [createAccount, { data }] = useMutation(mutationCreateUser);

  const handleChange = (event) => {
    event.persist();
    setValues((prevState) => ({
      account: {
        ...prevState.account,
        [event.target.name]: event.target.value
      }
    }));
  };

  const save = () => {
    const { account } = values;

    createAccount({
      variables: { input: account }
    });

    setValues(initialCustomerState);
  };

  return { values, save, handleChange, userData: data?.createAccount };
};
