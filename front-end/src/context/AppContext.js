import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import productsGetAll from '../server/productsGetAll';
import getOrdersByUser from '../server/getOrdersByUser';
import getOrderDetails from '../server/getOrderDetails';

const UserContext = React.createContext();

function AppContext({ children }) {
  const [user, setUser] = useState({ email: '' });
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);

  const getProducts = async () => {
    const response = await productsGetAll();
    setProducts(response);
  };

  const getOrders = async () => {
    const ordersList = await getOrdersByUser();
    setOrders(ordersList);
  };

  const getDetails = async (id) => {
    const details = await getOrderDetails(id);
    setOrderDetails(details);
  };

  const contextValue = {
    user,
    setUser,
    products,
    getProducts,
    orders,
    getOrders,
    orderDetails,
    getDetails,
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
