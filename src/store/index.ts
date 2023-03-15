import { configureStore } from "@reduxjs/toolkit";
import { footballApi } from "./football/football.api";

export const store = configureStore({
  reducer: {
    [footballApi.reducerPath]: footballApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(footballApi.middleware),
});
