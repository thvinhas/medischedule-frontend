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

export const addPatient = async (formData) => {
  try {
    await api.post("/patients", formData).then((response) => {
      window.location.reload();
    });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const deletePatient = async (id) => {
  try {
    await api.delete(`/patients/${id}`).then((response) => {
      window.location.reload();
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updatePatient = async (id, formData) => {
  try {
    await api.put(`/patients/${id}`, formData).then((response) => {
      window.location.reload();
    });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
