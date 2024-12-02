import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <form>
        <h1>Login</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
