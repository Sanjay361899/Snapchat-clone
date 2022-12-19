import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlices.js";
import cameraReducer from "../features/cameraSlice.js";

export const store = configureStore({
  reducer: {
    app: appReducer,
    camera: cameraReducer,
  },
});
