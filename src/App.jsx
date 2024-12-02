// import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Insurance from "./components/Features/Insurances/InsurancePage";
import Specialty from "./components/Features/Speciality/Speciality";
import Patient from "./components/Features/Patients/Patient";
import Hospital from "./components/Features/Hospitals/HospitalPage";
import Header from "./components/Header";

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
