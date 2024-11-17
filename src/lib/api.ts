export const API_ENDPOINTS = {
    auth: {
        login: "/auth/login",
        register: "/auth/register",
        logout: "/auth/logout",
    },
    users: {
        list: "/users",
    },
    maps: {
        sensors: "/maps/sensors",
        alerts: "/maps/alerts",
    },
    alerts: {
        list: "/alerts",
        filter: "/alerts/filter",
    },
    reports: {
        list: "/reports",
    }
}

export const loginUser = async (api: any, email: string, password: string) => {
    const response = await api.post(API_ENDPOINTS.auth.login, { email, password });
    return response.data;
};

export const registerUser = async (api: any, name: string, email: string, password: string) => {
    const response = await api.post(API_ENDPOINTS.auth.register, { name, email, password });
    return response.data;
};


export const fetchReports = async (api: any) => {
    const response = await api.get(API_ENDPOINTS.reports);
    return response.data;
};

export const fetchAlerts = async (api: any) => {
    const response = await api.get(API_ENDPOINTS.alerts);
    return response.data;
}