import React from 'react';
import LoginComponent from '../../components/login/login';

const LoginPage: React.FC = () => {
    return (
        <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
            <LoginComponent />
        </div>
    );
};

export default LoginPage;