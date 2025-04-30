import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './styles/styles.scss';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <App />
    </BrowserRouter>
  </StrictMode>
);