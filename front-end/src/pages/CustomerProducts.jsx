import React, { useEffect } from 'react';
import Header from '../components/Header';
import CardItem from '../components/CardItem';
import { useAppContext } from '../context/AppContext';

const CustomerProducts = () => {
  const { products, getProducts } = useAppContext();
  const token = localStorage.getItem('token');
  useEffect(() => {
    getProducts();
  }, []);

  !token ? window.location.href = '/' : null; 
  return (
    <div>
      <Header />
      {products.length > 0 ? console.log(products) : null}
      {
        products.length ? products.map((product) => (
          <CardItem key={ product.id } product={ product } />
        )) : <p>No products</p>
      }
    </div>
  );
};

export default CustomerProducts;
