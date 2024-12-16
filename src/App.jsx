// import "./App.css";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import AppContent from "./AppContent";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  );
}

export default App;
