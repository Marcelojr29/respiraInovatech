import axios from 'axios';
import { useAuth } from '@/context/AuthContext';

const useApi = () => {
    const { token } = useAuth();

    const api = axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return api;
};

export default useApi;