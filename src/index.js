import React from "react";
import ReactDOM from "react-dom/client";
import { Index } from "./index.tsx";
// import { ApolloProvider } from "@apollo/client";
// import { apolloClient } from "./init/apollo-client";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./router/Router.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
