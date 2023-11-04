import { AxiosResponse } from "axios";

import apiClient from "@/services/api-client";

type PayloadType = {
  email: string;
  password: string;
};

const registerUser = async (data: PayloadType): Promise<AxiosResponse> => {
  return await apiClient({
    method: "POST",
    url: "/register",
    data,
  });
};

const loginUser = async (data: PayloadType): Promise<AxiosResponse> => {
  return await apiClient({
    method: "POST",
    url: "/login",
    data,
  });
};

const authOption = {
  registerUser,
  loginUser,
};

export default authOption;
