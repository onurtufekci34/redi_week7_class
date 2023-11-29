import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ loggedIn }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      {!loggedIn && <button onClick={handleLoginClick}>Login</button>}
    </div>
  );
};

export default Home;
