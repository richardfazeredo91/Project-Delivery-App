import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CustomerProducts from './pages/CustomerProducts';
import DetailsProduct from './pages/DetailsProduct';
import AdminPage from './pages/AdminPage';
import AppContext from './context/AppContext';
import ShoppingCartContext from './context/ShoppingCartContext';
import CustomerOrder from './pages/CustomerOrders';
import CustomerCheckout from './pages/CustomerCheckout';

function App() {
  return (
    <AppContext>
      <ShoppingCartContext>
        <Router>
          <Routes>
            <Route path="/seller/orders/:id" element={ <DetailsProduct /> } />
            <Route path="/customer/orders/:id" element={ <DetailsProduct /> } />
            <Route path="/seller/orders" element={ <CustomerOrder /> } />
            <Route path="/customer/orders" element={ <CustomerOrder /> } />
            <Route path="/customer/checkout" element={ <CustomerCheckout /> } />
            <Route path="/admin/manage" element={ <AdminPage /> } />
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
