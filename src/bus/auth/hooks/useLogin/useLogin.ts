import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { loader } from "graphql.macro";

const initialCustomerState = {
  login: "",
  password: ""
};

const mutationLogin = loader("./gql/mutationLogIn.graphql");

export const useLogin = () => {
  const [values, setValues] = useState(initialCustomerState);
  const [logIn, { data, error, loading }] = useMutation(mutationLogin);

  useEffect(() => {
    if (data) {
      localStorage.setItem("loginToken", JSON.stringify(data?.logIn.token));
    }
  }, [data]);

  const handleChange = (event) => {
    event.persist();
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const onLogin = () => {
    logIn({
      variables: {
        username: values.login,
        password: values.password
      }
    });
  };

  return {
    values,
    handleChange,
    onLogin,
    error,
    loading,
    authData: data?.logIn
  };
};
