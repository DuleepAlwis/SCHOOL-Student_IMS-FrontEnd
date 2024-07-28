import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { RoutePaths } from '../routes';

const ProtectedRoute = ({ children }) => {
    const { user } = useSelector((state) => state.data);
  
    if (!user && user.token==null) {
      return <Navigate to={RoutePaths.home} />;
    }
  
    return children;
  };

  export default ProtectedRoute;