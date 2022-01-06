import React from 'react';
import { Navigate } from 'react-router-dom';
import loginAttempt from '../../server/loginAttempt';

const handleLoginButton = async (e, email, password) => {
  e.preventDefault();
  const response = await loginAttempt(email, password);
  if (response.token) {
    <Navigate replace to="/customer/products" />;
  } else {
    return false;
  }
  return true;
};

export default handleLoginButton;
