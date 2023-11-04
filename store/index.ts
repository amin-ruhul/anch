import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authSlice from "./feature/authSlice";

const combineReducer = combineReducers({
  auth: authSlice,
});

const store = configureStore({
  reducer: combineReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
