import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { loader } from "graphql.macro";

type LoginType = {
  login: string;
  password: string;
};

const mutationLogin = loader("./gql/mutationLogIn.graphql");

export const useLogin = (values: LoginType) => {
  const [logIn, { data, error, loading }] = useMutation(mutationLogin);

  useEffect(() => {
    if (data?.logIn) {
      localStorage.setItem("loginToken", JSON.stringify(data?.logIn.token));
    }
  }, [data]);

  const onLogin = () => {
    logIn({
      variables: {
        username: values.login,
        password: values.password
      }
    });
  };

  return {
    onLogin,
    error,
    loading,
    authData: data?.logIn
  };
};
