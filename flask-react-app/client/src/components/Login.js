import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter your password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
