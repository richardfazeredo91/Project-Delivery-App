import React from 'react';
import { Navigate } from 'react-router-dom';
import registerAttempt from '../../server/registerAttempt';

const handleRegisterButton = async (e, name, email, password) => {
  e.preventDefault();
  const response = await registerAttempt(name, email, password);
  if (response.token) {
    <Navigate replace to="/customer/products" />;
  } else {
    return false;
  }
  return true;
};

export default handleRegisterButton;
