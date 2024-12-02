import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <label>
          Name:
          <input type="text" placeholder="Enter your name" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter your password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
