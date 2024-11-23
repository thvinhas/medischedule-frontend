// import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Insurance from "./components/Insurances/Inusrance";
import Header from "./components/Header";
import Specialty from "./components/Speciality";
import Hospital from "./components/Hospital";
import Patient from "./components/Patient";

function App() {
  return (
    <>
      <Header title="menu" />
      <div className="container mt-4">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/specialty" element={<Specialty />} />
            <Route path="/Hospital" element={<Hospital />} />
            <Route path="/Patients" element={<Patient />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
