import api from "../../../../api";

export const fetchServices = async () => {
  try {
    const response = await api.get("/specialities");
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
