import React, { useEffect } from 'react';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import { useAppContext } from '../context/AppContext';

export default function CustomerOrder() {
  const { orders, getOrders } = useAppContext();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user.token) {
      localStorage.clear();
      navigate('/');
    }
    getOrders();
  }, []);

  return (
    <>
      <Header />
      {orders.length ? (
        orders.map((order) => (
          <OrderCard key={ order.id } order={ order } />
        ))
      ) : (
        <p>nenhum pedido</p>
      )}
    </>
  );
}
