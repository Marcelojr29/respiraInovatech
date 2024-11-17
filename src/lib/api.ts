export const API_ENDPOINTS = {
    auth: {
        login: '/auth/login',
        register: '/auth/register',
    },
    sensors: '/sensors',
    reports: '/reports',
};

export const loginUser = async (api: any, email: string, password: string) => {
    const response = await api.post(API_ENDPOINTS.auth.login, { email, password });
    return response.data;
};

export const registerUser = async (api: any, name: string, email: string, password: string) => {
    const response = await api.post(API_ENDPOINTS.auth.register, { name, email, password });
    return response.data;
};

export const fetchReports = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/reports"); // ALTERAR O URL
        if(!response.ok) {
            throw new Error("Erro ao buscar relatórios");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};