import { useAuthContext } from '@/context/AuthContext';
import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { token } = useAuthContext();

    if(!token) {
        return <Navigate to="/login" replace />;
    }

    return <>{ children }</>;
};

export default PrivateRoute;