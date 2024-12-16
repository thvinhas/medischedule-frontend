// import "./App.css";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import AppContent from "./AppContent";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
