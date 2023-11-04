import { toast } from "react-toastify";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import authOption from "@/repo/api-endpoints/auth";
import { clearAuthToken, setAuthToken } from "@/services/cookies";

type StateType = {
  isLoading: boolean;
  authToken: null | string;
  errorMessage: string;
};

const initialState: StateType = {
  isLoading: false,
  authToken: null,
  errorMessage: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }, thunkAPI) => {
    try {
      const res = await authOption.loginUser(data);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error: AxiosError | any) {
      let errorMessage = error?.response?.data?.error || "Something went wrong";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.errorMessage = "";
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.authToken = null;
        state.errorMessage = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authToken = action.payload.token;
        state.errorMessage = "";
        setAuthToken(action.payload);
        toast.success("Login Success");
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload + "";
        state.authToken = null;
        clearAuthToken();
        toast.error(action.payload + "");
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
