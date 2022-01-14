import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CustomerProducts from './pages/CustomerProducts';
// import DetailsProduct from './pages/DetailsProduct';
import AppContext from './context/AppContext';
import ShoppingCartContext from './context/ShoppingCartContext';

function App() {
  return (
    <AppContext>
      <ShoppingCartContext>
        <Router>
          <Routes>
            {/* <Route path="/sales/details/:id" element={ <DetailsProduct /> } /> */}
            <Route path="/customer/products" element={ <CustomerProducts /> } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/register" element={ <RegisterPage /> } />
            <Route path="/" element={ <Navigate replace to="/login" /> } />
          </Routes>
        </Router>
      </ShoppingCartContext>
    </AppContext>
  );
}

export default App;
