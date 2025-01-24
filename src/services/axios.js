import axios from "axios";
import { getAccessToken } from "./auth";

export const axiosInstance = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    "Content-Type": "application/json"
  }
});

axiosInstance.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem("token");
    const expiresIn = localStorage.getItem("expiresIn");

    if (!token || Date.now() >= +expiresIn) {
      token = await getAccessToken();
    }

    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    console.log("Error from axios.js:", error);
    return null;
  }
);
