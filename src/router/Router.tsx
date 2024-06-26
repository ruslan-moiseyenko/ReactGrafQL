import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { CustomerPage } from "../pages/Login/CustomerPage.tsx";
import { ErrorPage } from "../pages/Login/ErrorPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/customer",
    element: <CustomerPage />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);
