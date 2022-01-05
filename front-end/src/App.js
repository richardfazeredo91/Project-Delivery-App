import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AppContext from './context/AppContext';

function App() {
  return (
    <AppContext>
      <Router>
        <Routes>
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/" element={ <Navigate replace to="/login" /> } />
        </Routes>
      </Router>
    </AppContext>
  );
}

export default App;
