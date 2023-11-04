import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { getAuthToken } from "@/services/cookies";

import authSlice from "./feature/authSlice";

const combineReducer = combineReducers({
  auth: authSlice,
});

const token = getAuthToken();

const preloadedState = {
  // Initialize state from cookies
  auth: {
    authToken: token,
    isLoading: false,
    errorMessage: "",
  },
};

const store = configureStore({
  reducer: combineReducer,
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
