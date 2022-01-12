import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import CardItem from '../components/CardItem';
import { useAppContext } from '../context/AppContext';
import { useShoppingCartContext } from '../context/ShoppingCartContext';

const CustomerProducts = () => {
  const { products, getProducts } = useAppContext();
  const { totalPrice, shoppingCart } = useShoppingCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user.token) {
      localStorage.clear();
      window.location.href = '/';
    }
    getProducts();
  }, [getProducts]);

  return (
    <>
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
        disabled={ !shoppingCart.length }
        onClick={ () => navigate('/customer/checkout') }
      >
        <p data-testid="customer_products__checkout-bottom-value">
          {totalPrice.replace(/\./, ',')}
        </p>
      </button>
    </>
  );
};

export default CustomerProducts;
