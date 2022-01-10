import React, { useEffect } from 'react';
import Header from '../components/Header';
import CardItem from '../components/CardItem';
import { useAppContext } from '../context/AppContext';

const CustomerProducts = () => {
  const { products, getProducts } = useAppContext();
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (!user.token) {
      localStorage.clear();
      window.location.href = '/';
    }
    getProducts();
  }, []);

  return (
    <div>
      <Header />
      {products.length ? (
        products.map((product) => (
          <CardItem key={ product.id } product={ product } />
        ))
      ) : (
        <p>No products</p>
      )}
    </div>
  );
};

export default CustomerProducts;
