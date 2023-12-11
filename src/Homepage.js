// HomePage.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the "/app" route when the button is clicked
    navigate("/exam1");
  };

  return (
    <div className="text-center">
      <h1>Welcome to My App</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Go to App
      </button>
    </div>
  );
};

export default HomePage;
