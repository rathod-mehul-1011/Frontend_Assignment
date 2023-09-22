import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ModalProvider } from "./contexts/ModalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModalProvider>
    <App />
  </ModalProvider>
);
