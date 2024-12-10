import api from "../../../../api";

export const fetchInsurances = async () => {
  try {
    const response = await api.get("/insurances");
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addInsurance = async (formData) => {
  try {
    await api.post("/insurances", formData).then((response) => {
      window.location.reload();
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteInsurance = async (id) => {
  try {
    await api.delete(`/insurances/${id}`).then((response) => {
      window.location.reload();
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateInsurance = async (id, formData) => {
  try {
    await api.put(`/insurances/${id}`, formData).then((response) => {
      window.location.reload();
    });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
