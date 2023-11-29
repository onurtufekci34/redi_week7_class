// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ loggedIn, handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = handleLogin(email, password);
    if (success) {
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {!loggedIn && (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Login;
