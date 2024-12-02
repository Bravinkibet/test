import React, { useState } from "react";
import "./Home.css";
import Login from "./Login";
import Signup from "./Signup";

const Home = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  const closeModals = () => {
    setLoginOpen(false);
    setSignupOpen(false);
  };

  return (
    <div className={`home-container ${isLoginOpen || isSignupOpen ? "blur" : ""}`}>
      <header className="home-header">
        <h1>Welcome to Our Store</h1>
        <div className="auth-buttons">
          <button onClick={() => setLoginOpen(true)}>Log In</button>
          <button onClick={() => setSignupOpen(true)}>Sign Up</button>
        </div>
      </header>
      <p>Explore amazing products and meet people!</p>
      <div className="home-links">
        <a href="/products" className="home-link">View Products</a>
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="modal-overlay" onClick={closeModals}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Login />
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupOpen && (
        <div className="modal-overlay" onClick={closeModals}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Signup />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
