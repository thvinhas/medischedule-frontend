import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  insurances: [],
  status: "idle",
  error: null,
};

export const fetchAllInsurances = createAsyncThunk(
  "insurance/fetchAll",
  async () => {
    const response = await fetchInsurances();
    return response;
  }
);
export const addInsurance = createAsyncThunk(
  "insurance/add",
  async (newInsurance) => {
    const response = await addInsurance(newInsurance);
    return response;
  }
);
export const editInsurance = createAsyncThunk(
  "insurance/edit",
  async ({ id, updatedData }) => {
    const response = await editInsurance(id, updatedData);
    return response;
  }
);
export const removeInsurance = createAsyncThunk(
  "insurance/remove",
  async (id) => {
    await removeInsurance(id);
    return id;
  }
);

const insuranceSlice = createSlice({
  name: "insurance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchAllInsurances.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.insurances = action.payload;
      })
      // Add
      .addCase(addInsurance.fulfilled, (state, action) => {
        state.insurances.push(action.payload);
      })
      // Edit
      .addCase(editInsurance.fulfilled, (state, action) => {
        const index = state.insurances.findIndex(
          (insurance) => insurance.id === action.payload.id
        );
        state.insurances[index] = action.payload;
      })
      // Delete
      .addCase(removeInsurance.fulfilled, (state, action) => {
        state.insurances = state.insurances.filter(
          (insurance) => insurance.id !== action.payload
        );
      });
  },
});

export default insuranceSlice.reducer;
