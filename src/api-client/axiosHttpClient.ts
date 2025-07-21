import axios from "axios";
import { acquireAccessToken } from "../security-oauth2/azureMsal";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async (config) => {
  const accessToken = await acquireAccessToken();
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});
