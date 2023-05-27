import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

interface ProtectedRouteProps {
  children: ReactNode;
  logged: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, logged }) => {
  const { isAuthorized } = useAuth();

  if (!isAuthorized && logged) {
    return <Navigate to="/" />;
  }

  if (isAuthorized && !logged) {
    return <Navigate to="/main" />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default ProtectedRoute;
