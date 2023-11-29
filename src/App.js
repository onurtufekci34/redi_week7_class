import { useState } from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import RootLayout from "./layouts/RootLayout";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email === "example@example.com" && password === "password") {
      setLoggedIn(true);
      setUser({ email: "example@example.com", name: "John Doe" });
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout loggedIn={loggedIn} />}>
        <Route index element={<Home loggedIn={loggedIn} />} />
        <Route path="login" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="dashboard"
          element={
            <Dashboard
              loggedIn={loggedIn}
              user={user}
              handleLogout={handleLogout}
            />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
