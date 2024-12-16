import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Insurance from "./components/Features/Insurances/InsurancePage";
import Specialty from "./components/Features/Speciality/Speciality";
import Patient from "./components/Features/Patients/Patient";
import Hospital from "./components/Features/Hospitals/HospitalPage";
import Header from "./components/Header";
import PrivateRoute from "./PrivateRoute";
import Login from "./components/Auth/Login";

const AppContent = () => {
  const location = useLocation();

  // Lista de rotas sem Header
  const noHeaderRoutes = ["/login"];

  return (
    <>
      {/* Exibe o Header apenas se a rota atual não estiver em `noHeaderRoutes` */}
      {!noHeaderRoutes.includes(location.pathname) && <Header title="menu" />}
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/insurance"
            element={
              <PrivateRoute>
                <Insurance />
              </PrivateRoute>
            }
          />
          <Route
            path="/specialty"
            element={
              <PrivateRoute>
                <Specialty />
              </PrivateRoute>
            }
          />
          <Route
            path="/Hospital"
            element={
              <PrivateRoute>
                <Hospital />
              </PrivateRoute>
            }
          />
          <Route
            path="/Patients"
            element={
              <PrivateRoute>
                <Patient />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default AppContent;
