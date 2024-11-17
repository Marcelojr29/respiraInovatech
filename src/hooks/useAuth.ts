import { useState, useEffect } from "react";

interface AuthState {
    token: string | null;
    user: any | null;
}

const useAuth = () => {
    const [auth, setAuth] = useState<AuthState>({ token: null, user: null });

    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user") || "null");
        if (token) {
            setAuth({ token, user });
        }
    }, []);

    const login = (token: string, user: any) => {
        setAuth({ token, user });
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
    };

    const logout = () => {
        setAuth({ token: null, user: null });
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    return {
        token: auth.token,
        user: auth.user,
        login,
        logout,
        isAuthenticated: !!auth.token,
    };
};

export default useAuth;