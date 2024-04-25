import React from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1>There is no such a page!</h1>
      <h2>Please, go back and do it in a right way</h2>
      <button onClick={goBack}>Go back</button>
    </div>
  );
};
