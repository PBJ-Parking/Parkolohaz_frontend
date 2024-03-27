import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import { ParkolohelyProvider } from "./contexts/ParkolohelyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ParkolohelyProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
      </ParkolohelyProvider>
    </BrowserRouter>
  </React.StrictMode>
);
