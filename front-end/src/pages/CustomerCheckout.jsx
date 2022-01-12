import React from 'react';
import SalesTable from '../components/CustomerCheckout/SalesTable';
import Header from '../components/Header';
import { useShoppingCartContext } from '../context/ShoppingCartContext';

function CustomerCheckout() {
  const { shoppingCart } = useShoppingCartContext();
  return (
    <>
      <Header />
      <div>
        <h2>Finalizar pedido</h2>
        <SalesTable sales={ shoppingCart } />
      </div>
    </>
  );
}

export default CustomerCheckout;
