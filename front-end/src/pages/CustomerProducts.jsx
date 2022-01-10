import React, { useEffect } from 'react';
import Header from '../components/Header';
import CardItem from '../components/CardItem';
import ShoppingCardContext from '../context/ShoppingCardContext';
import { useAppContext } from '../context/AppContext';

const CustomerProducts = () => {
  const { products, getProducts } = useAppContext();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user.token) {
      localStorage.clear();
      window.location.href = '/';
    }
    getProducts();
  }, [getProducts]);

  return (
    <ShoppingCardContext>
      <Header />
      {products.length ? (
        products.map((product) => (
          <CardItem key={ product.id } product={ product } />
        ))
      ) : (
        <p>No products</p>
      )}
    </ShoppingCardContext>
  );
};

export default CustomerProducts;
