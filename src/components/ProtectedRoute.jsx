/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ element }) => {
  const token = Cookies.get('token'); // Get token from cookies or any other authentication check

  return token ? element : <Navigate to="/signin"   />;
};

export default ProtectedRoute;
