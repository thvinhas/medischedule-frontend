import api from "../../../../api";

export const fetchHospitals = async () => {
  try {
    const response = await api.get("/insurances");
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
