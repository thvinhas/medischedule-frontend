import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { ThemeProvider } from "react-bootstrap";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider dir="rtl">
      <App />
    </ThemeProvider>
  </StrictMode>
);
