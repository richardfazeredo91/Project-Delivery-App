import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AppContext from './context/AppContext';

function App() {
  return (
    <AppContext>
      <Router>
        <Routes>
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/register" element={ <RegisterPage /> } />
          <Route path="/" element={ <Navigate replace to="/login" /> } />
        </Routes>
      </Router>
    </AppContext>
  );
}

export default App;
