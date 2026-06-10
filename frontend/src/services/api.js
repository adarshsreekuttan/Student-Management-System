import axios from "axios";

const api = axios.create({
  baseURL: "https://student-management-system-6y87.onrender.com/api/",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // SAFETY CHECK: If the 401 error comes from the login endpoint, bypass the refresh loop
    if (originalRequest.url.includes("login/")) {
      return Promise.reject(error);
    }

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");

        // If there's no refresh token to begin with, clear out and bail immediately
        if (!refreshToken) {
          throw new Error("No refresh token found");
        }

        const response = await axios.post(
          "https://student-management-system-6y87.onrender.com/api/token/refresh/",
          {
            refresh: refreshToken,
          }
        );

        const newAccessToken = response.data.access;

        localStorage.setItem("accessToken", newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);

      } catch (refreshError) {
        localStorage.clear();
        
        // Only redirect to login if we aren't already sitting on the login page
        if (window.location.pathname !== "/") {
          window.location.href = "/";
        }

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;