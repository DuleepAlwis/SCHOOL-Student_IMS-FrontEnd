import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { RoutePaths } from '../routes';

const ProtectedRoute = ({ children }) => {
    const { user } = useSelector((state) => state.auth);
  
    if (!user) {
      return <Navigate to="/login" />;
    }
  
    return children;
  };

  export default ProtectedRoute;