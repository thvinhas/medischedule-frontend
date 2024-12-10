import api from "../../../../api";

export const fetchHospitals = async () => {
  try {
    const response = await api.get("/hospitals");
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addHospitals = async (formData) => {
  try {
    await api.post("/hospitals", formData).then((response) => {
      window.location.reload();
    });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const deleteHospitals = async (id) => {
  try {
    await api.delete(`/hospitals/${id}`).then((response) => {
      window.location.reload();
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateHospitals = async (id, formData) => {
  try {
    await api.put(`/hospitals/${id}`, formData).then((response) => {
      window.location.reload();
    });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
