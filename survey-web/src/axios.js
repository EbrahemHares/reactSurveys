import axios from "axios";
import router from "./router";

console.log("API_BASE_URL:", import.meta.env.VITE_API_BASE_URL);

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
    // const token = "123";
    config.headers.Authorization = `Bearer ${localStorage.getItem("TOKEN")}`;
    return config;
});

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response ? error.response.status : null;
        if (status === 401) {
            router.navigate("/login");
            return error;
        }
        throw error;
    }
);
export default axiosClient;
