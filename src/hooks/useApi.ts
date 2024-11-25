import axios from "axios";
import { useAuthContext } from "@/context/AuthContext";
import { API_ENDPOINTS } from "@/lib/api";

const useApi = () => {
    const { token } = useAuthContext();

    const api = axios.create({
        baseURL: "http://localhost:3000",
        timeout: 10000,
        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : undefined,
        },
    });

    return {
        loginUser: (email: string, password: string) => 
            api.post(API_ENDPOINTS.auth.login, { email, password }),

        registerUser: (name: string, email: string, password: string) =>
            api.post(API_ENDPOINTS.auth.register, { name, email, password }),

        fetchReports: () => api.get(API_ENDPOINTS.reports.list),

        fetchSensors: () => api.get(API_ENDPOINTS.maps.sensors)

        // logoutUser: () => api.post(API_ENDPOINTS.auth.logout),

        // fetchUsers: ()
    };
};

export default useApi;