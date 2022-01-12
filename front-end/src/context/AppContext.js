import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import productsGetAll from '../server/productsGetAll';
import getOrdersByUser from '../server/getOrdersByUser';

const UserContext = React.createContext();

function AppContext({ children }) {
  const [user, setUser] = useState({ email: '' });
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const getProducts = async () => {
    const response = await productsGetAll();
    console.log('products lol');
    setProducts(response);
  };

  const getOrders = async (token) => {
    const response = await getOrdersByUser(token);
    console.log('lol');
    setOrders(response);
  };

  const contextValue = {
    user,
    setUser,
    products,
    getProducts,
    orders,
    getOrders,
  };

  return (
    <UserContext.Provider value={ contextValue }>{children}</UserContext.Provider>
  );
}

export default AppContext;

const useAppContext = () => useContext(UserContext);

export { useAppContext };

AppContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
