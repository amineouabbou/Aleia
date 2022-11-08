import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../redux/slices/menuSlice";
import propertiesReducer from "../redux/slices/propertiesSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    properties: propertiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
