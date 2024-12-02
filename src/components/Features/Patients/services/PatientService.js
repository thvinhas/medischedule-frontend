import api from "../../../../api";

export const fetchPatients = async () => {
  try {
    const response = await api.get("/patients");
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
