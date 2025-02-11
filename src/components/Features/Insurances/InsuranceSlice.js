import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api";
import { actions } from "griddle-react";

export const fetchInsurances = createAsyncThunk("fetchInsurance", async () => {
  const response = await api.get("/insurances");
  return response.data.data;
});
export const addInsurance = createAsyncThunk(
  "addInsurance",
  async (insuranceData) => {
    const response = await api.post("/insurances", insuranceData);
    return response.data;
  }
);
export const updateInsurance = createAsyncThunk(
  "updateInsurance",
  async ({ id, name }) => {
    const response = await api.put(`/insurances/${id}`, { name }); // Send update request
    return response.data;
  }
);

export const deleteInsurance = createAsyncThunk(
  "deleteInsurance",
  async (id) => {
    await api.delete(`/insurances/${id}`);
    return id; // Return deleted insurance ID
  }
);

const insuranceSlice = createSlice({
  name: "Insurances",
  initialState: {
    insurances: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInsurances.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInsurances.fulfilled, (state, action) => {
        state.loading = false;
        state.insurances = action.payload;
      })
      .addCase(fetchInsurances.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addInsurance.fulfilled, (state, action) => {
        state.insurances.push(action.payload);
      })
      .addCase(addInsurance.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateInsurance.fulfilled, (state, action) => {
        const index = state.insurances.findIndex(
          (insurance) => insurance.id === action.payload.id
        );
        if (index !== -1) {
          state.insurances[index] = action.payload; // Update Redux state
        }
      })
      .addCase(updateInsurance.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteInsurance.fulfilled, (state, action) => {
        state.insurances = state.insurances.filter(
          (insurance) => insurance.id !== action.payload
        );
      })
      .addCase(deleteInsurance.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { insuranceAdded, insuranceUpdated, inusraceDeleted } =
  insuranceSlice.actions;

export default insuranceSlice.reducer;
