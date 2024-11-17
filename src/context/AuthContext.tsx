import React, { createContext, useState, useContext } from 'react';

interface AuthContextProps {
    user: { name: string, email: string } | null;
    token: string | null;
    login: (token: string, user: { name: string, email: string }) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const login = (token: string, user: { name: string, email: string }) => {
        setToken(token);
        setUser(user);
        localStorage.setItem('authToken', token);
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('authToken');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            { children }
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};