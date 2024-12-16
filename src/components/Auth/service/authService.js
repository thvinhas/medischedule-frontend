import api from "../../../api";

export const login = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  const token = response.data.token;
  localStorage.setItem("authToken", token);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("authToken");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};
