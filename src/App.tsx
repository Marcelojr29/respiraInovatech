import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Pages/home/home"; // Página inicial
import LoginPage from './Pages/login/Login';
import Dashboard from "./Pages/dashboard/Dashboard"; // Painel do usuário
import Reports from "./Pages/reports/Reports"; // Relatórios
import { AuthProvider } from "./context/AuthContext"; // Contexto de autenticação
import PrivateRoute from "./components/ui/PrivateRoute"; // Rota protegida

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rota pública */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Rota inicial */}
          <Route path="/" element={<Home />} />

          {/* Rotas protegidas */}
          
          <Route
            path="/dashboard"
            element={
              // <PrivateRoute>
                <Dashboard />
              // </PrivateRoute>
            }
          />
          <Route
            path="/reports"
            element={
              // <PrivateRoute>
                <Reports />
              // </PrivateRoute>
            }
          />

          {/* Redirecionamento para login por padrão */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
