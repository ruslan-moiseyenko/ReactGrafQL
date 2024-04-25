import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./init/apollo-client";
import { router } from "./router/Router.tsx";

import React from "react";
import { RouterProvider } from "react-router-dom";

export const Index = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
};
