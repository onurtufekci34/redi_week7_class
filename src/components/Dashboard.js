// Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ loggedIn, user, handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <div>
      {loggedIn && (
        <div>
          <h1>Welcome, {user && user.name}!</h1>
          <p>This is the Dashboard</p>
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
