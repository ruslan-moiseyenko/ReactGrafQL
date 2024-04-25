import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import { useLogin } from "../../hooks/useLogin/useLogin.ts";
import { useForm } from "../../hooks/useForm/useForm.ts";

const initialFormState = {
  login: "",
  password: ""
};

export function LoginPage() {
  const { values, handleChange } = useForm(initialFormState);
  const { onLogin, error, loading, authData } = useLogin(values);
  const navigate = useNavigate();

  useEffect(() => {
    if (authData?.token) {
      navigate("/customer");
    }
  }, [authData, navigate]);

  const errorMessage = !error ? null : (
    <p className="error">{`Error: ${error?.message}`}</p>
  );

  const loadingInProcess = loading ? <div>Loading...</div> : null;

  const handleLogin = async () => {
    await onLogin();
  };

  return (
    <div className="container">
      <h2>Welcome! Please login.</h2>
      <div className="data-form">
        <input
          type="text"
          name="login"
          placeholder="login"
          value={values.login}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
        />
        {loadingInProcess}
        {errorMessage}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
