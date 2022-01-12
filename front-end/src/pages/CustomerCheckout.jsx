import React from 'react';
import SalesTable from '../components/CustomerCheckout/SalesTable';
import Header from '../components/Header';
import { useShoppingCartContext } from '../context/ShoppingCartContext';

function CustomerCheckout() {
  const { totalPrice, shoppingCart } = useShoppingCartContext();
  return (
    <>
      <Header />
      {shoppingCart.length ? (
        <div>
          <h2>Finalizar pedido</h2>
          <SalesTable sales={ shoppingCart } />

          <p data-testid="customer_checkout__element-order-total-price">
            {totalPrice.replace(/\./, ',')}
          </p>
        </div>
      ) : <h1>Seu carrinho está vazio!</h1>}
    </>
  );
}

export default CustomerCheckout;
