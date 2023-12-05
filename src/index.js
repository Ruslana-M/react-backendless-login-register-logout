import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Backendless from "backendless";

Backendless.serverURL = "https://eu-api.backendless.com";
Backendless.initApp(
  process.env.REACT_APP_BACKENDLESS_ID,
  process.env.REACT_APP_BACKENDLESS_KEY
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
