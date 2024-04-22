import React from "react";
import "./styles.css";

export function LoginPage() {
  return (
    <div className="container">
      <h2>Welcome! Please login.</h2>
      <div className="data-form">
        <input type="text" name="login" placeholder="login" />
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>
      </div>
    </div>
  );
}
