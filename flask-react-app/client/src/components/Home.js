import React from "react";
import "./Home.css";

const Home = ({ toggleLogin, toggleSignup }) => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">The Store</div>
        <div className="nav-links">
          <button className="nav-btn" onClick={toggleLogin}>
            Log In
          </button>
          <button className="nav-btn signup" onClick={toggleSignup}>
            Sign Up
          </button>
        </div>
      </nav>
      <header className="main-banner">
        <div className="banner-content">
          <h1>Welcome to The Store</h1>
          <p>Discover exclusive products curated just for you.</p>
          <div className="action-buttons">
            <button className="btn btn-login" onClick={toggleLogin}>
              Log In
            </button>
            <button className="btn btn-signup" onClick={toggleSignup}>
              Sign Up
            </button>
          </div>
        </div>
      </header>
      <section className="products-section">
        <h2>Our Products</h2>
        <div className="product-grid">
          <div className="product-item lingerie">Lingerie</div>
          <div className="product-item gadgets">Gadgets</div>
          <div className="product-item cbd">CBD Products</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
