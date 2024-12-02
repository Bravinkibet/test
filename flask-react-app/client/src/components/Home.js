import React from "react";
import "./Home.css";

const Home = ({ toggleLogin, toggleSignup }) => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-title">
          <h1>Welcome to The Store</h1>
          <p>Your one-stop shop for exclusive products & connections</p>
        </div>
        <div className="auth-buttons">
          <button className="login-btn" onClick={toggleLogin}>
            Log In
          </button>
          <button className="signup-btn" onClick={toggleSignup}>
            Sign Up
          </button>
        </div>
      </header>
      <main className="home-main">
        <section className="intro-section">
          <h2>Explore Our Features</h2>
          <p>Shop unique products, connect with others, and enjoy exclusive offers.</p>
        </section>
        <section className="highlights">
          <div className="highlight-item">
            <h3>Lingerie</h3>
            <p>Premium quality, stylish, and comfortable.</p>
          </div>
          <div className="highlight-item">
            <h3>Sex Toys</h3>
            <p>Discreet, affordable, and fun options for everyone.</p>
          </div>
          <div className="highlight-item">
            <h3>CBD & Cannabis</h3>
            <p>Top-notch, discounted, and legit products.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
