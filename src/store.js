import { configureStore } from "@reduxjs/toolkit";
import insuranceReducer from "./components/Features/Insurances/InsuranceSlice";

export default configureStore({
  reducer: {
    insurances: insuranceReducer,
  },
});
