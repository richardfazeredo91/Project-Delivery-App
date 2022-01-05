import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AppContext from './context/AppContext';

function App() {
  return (
    <AppContext>
      <Router>
        <Routes>
          <Route path="/" element={ <LoginPage /> } />
        </Routes>
      </Router>
    </AppContext>
  );
}

export default App;
