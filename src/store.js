import { configureStore } from "@reduxjs/toolkit";
import insuranceReducer from "./components/Features/Insurances/insuranceSlice.js";

export const store = configureStore({
  reducer: {
    insurance: insuranceReducer,
  },
});
