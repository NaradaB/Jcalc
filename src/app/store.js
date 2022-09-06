import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "../features/userInputSlice";

export default configureStore({
  reducer: {
    userInputs: inputReducer,
  },
});
