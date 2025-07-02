import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwind.css"; // Comment this out if not using Tailwind yet
import CareerHealthDashboard from "./index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CareerHealthDashboard />
  </React.StrictMode>
);
