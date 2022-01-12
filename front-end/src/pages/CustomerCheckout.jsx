import React from 'react';
import SalesTable from '../components/CustomerCheckout/SalesTable';
import Header from '../components/Header';
import { useShoppingCartContext } from '../context/ShoppingCartContext';

function CustomerCheckout() {
  const { totalPrice } = useShoppingCartContext();
  return (
    <>
      <Header />
      <div>
        <h2>Finalizar pedido</h2>
        <SalesTable />

        <p data-testid="customer_checkout__element-order-total-price">
          {totalPrice.replace(/\./, ',')}
        </p>
      </div>
    </>
  );
}

export default CustomerCheckout;
