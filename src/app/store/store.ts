import { configureStore } from "@reduxjs/toolkit";
import scheduleReducer from "./scheduleSlice";

export const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
