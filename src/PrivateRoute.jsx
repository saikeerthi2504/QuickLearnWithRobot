// PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn"); // Check login status
  return isLoggedIn ? children : <Navigate to="/login" />; // If not logged in, redirect to login
};

export default PrivateRoute;
