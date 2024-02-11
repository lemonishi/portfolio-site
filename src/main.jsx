import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/HomePage.jsx";
import NavBar from "./components/NavBar.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <HomePage />
  </React.StrictMode>
);
