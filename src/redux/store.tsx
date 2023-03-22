import { configureStore } from "@reduxjs/toolkit";
import capsuleReducer from "./capsuleSlice";

export const store = configureStore({
  reducer: {
    capsule: capsuleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
