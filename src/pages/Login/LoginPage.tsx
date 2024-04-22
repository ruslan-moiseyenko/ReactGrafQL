import React from "react";
import "./styles.css";
import { useLogin } from "../../bus/auth/hooks/useLogin/useLogin.ts";

export function LoginPage() {
  const { values, handleChange, onLogin, error, loading } = useLogin();

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
