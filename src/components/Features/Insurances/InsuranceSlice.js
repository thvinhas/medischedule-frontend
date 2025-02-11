import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api";

export const fetchInsurances = createAsyncThunk("fetchInsurance", async () => {
  const response = await api.get("/insurances");
  // console.log("API Response:", response.data.data);
  return response.data.data;
});

const insuranceSlice = createSlice({
  name: "Insurances",
  initialState: {
    insurances: [],
    loading: false,
    error: null,
  },
  reducers: {
    insuranceAdded(state, action) {
      state.insurances.push(action.payload);
    },
    insuranceUpdated(state, action) {
      const { id, name } = action.payload;
      const existingInsurance = state.insurances.find(
        (insurance) => insurance.id === id
      );
      if (existingInsurance) {
        existingInsurance.name = name;
      }
    },
    inusraceDeleted(state, action) {
      const { id } = action.payload;
      const existingInsurance = state.insurances.find(
        (insurance) => insurance.id == id
      );
      if (existingInsurance) {
        return state.filter((user) => user.id !== id.id);
      }
    },
  },
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
      });
  },
});

export const { insuranceAdded, insuranceUpdated, inusraceDeleted } =
  insuranceSlice.actions;

export default insuranceSlice.reducer;
