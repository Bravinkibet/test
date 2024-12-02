import React from "react";
import "./Home.css"; // Ensure this CSS file exists and matches your styling.

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Store</h1>
      <p>Discover amazing products designed just for you!</p>
      <ul>
        <li><a href="/products">View Products</a></li>
        <li><a href="/about">About Us</a></li>
      </ul>
    </div>
  );
};

export default Home;
