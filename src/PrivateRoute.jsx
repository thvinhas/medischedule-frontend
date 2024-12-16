import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./components/Auth/service/authService";

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
