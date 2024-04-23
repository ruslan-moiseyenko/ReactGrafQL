import React from "react";
import "./styles.css";
import { useLogin } from "../../hooks/useLogin/useLogin.ts";
import { useForm } from "../../hooks/useForm/useForm.ts";

const initialFormState = {
  login: "",
  password: ""
};

export function LoginPage() {
  const { values, handleChange } = useForm(initialFormState);
  const { onLogin, error, loading } = useLogin(values);

  const errorMessage = !error ? null : (
    <p className="error">{`Error: ${error?.message}`}</p>
  );

  const loadingInProcess = loading ? <div>Loading...</div> : null;

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
        <button onClick={onLogin}>Login</button>
      </div>
    </div>
  );
}
