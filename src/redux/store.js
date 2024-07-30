import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import matchesReducer from "./slices/matchesSlice";

import authMiddleware from "./authMiddleware";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    matches: matchesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});
