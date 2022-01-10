import React, { useEffect } from 'react';
import Header from '../components/Header';
import CardItem from '../components/CardItem';
import ShoppingCartContext from '../context/ShoppingCartContext';
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
    <ShoppingCartContext>
      <Header />
      {products.length ? (
        products.map((product) => (
          <CardItem key={ product.id } product={ product } />
        ))
      ) : (
        <p>No products</p>
      )}
      <button
        data-testid="customer_products__button-cart"
        type="button"
      >
        {/* <p data-testid="customer_products__checkout-bottom-value">{totalShoppingCart}</p> */}
      </button>
    </ShoppingCartContext>
  );
};

export default CustomerProducts;
