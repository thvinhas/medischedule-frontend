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

export const addSpecilty = async (formData) => {
  try {
    await api.post("/specialities", formData).then((response) => {
      window.location.reload();
    });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const deleteSpecilty = async (id) => {
  try {
    await api.delete(`/specialities/${id}`).then((response) => {
      window.location.reload();
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateSpecilty = async (id, formData) => {
  try {
    await api.put(`/specialities/${id}`, formData).then((response) => {
      window.location.reload();
    });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
