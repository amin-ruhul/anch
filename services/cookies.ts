import Cookies from "js-cookie";

export const setAuthToken = (token: string, expiresTimeInDay = 365) => {
  Cookies.set("ancr-auth-token", JSON.stringify(token), {
    expires: expiresTimeInDay,
  });
};

export const clearAuthToken = () => {
  Cookies.remove("ancr-auth-token");
};

export const getAuthToken = () => {
  const token = Cookies.get("ancr-auth-token");
  if (token) return JSON.parse(token);

  return null;
};
