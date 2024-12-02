import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Login from "./components/Login";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleLogin = () => setShowLogin(!showLogin);
  const toggleSignup = () => setShowSignup(!showSignup);

  return (
    <Router>
      <div className="App">
        {showLogin && (
          <div className="modal-overlay" onClick={toggleLogin}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <Login />
            </div>
          </div>
        )}
        {showSignup && (
          <div className="modal-overlay" onClick={toggleSignup}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {/* Replace with a Signup component when created */}
              <h2>Signup Form</h2>
            </div>
          </div>
        )}
        <Routes>
          <Route
            path="/"
            element={<Home toggleLogin={toggleLogin} toggleSignup={toggleSignup} />}
          />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
