import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <form>
        <h1>Create an Account</h1>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
