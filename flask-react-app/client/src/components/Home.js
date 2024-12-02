import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Store</h1>
      <p>Explore amazing products and meet people!</p>
      <div className="home-links">
        <a href="/products" className="home-link">View Products</a>
        <a href="/login" className="home-link">Login</a>
      </div>
    </div>
  );
};

export default Home;
