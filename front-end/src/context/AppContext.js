import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import productsGetAll from '../server/productsGetAll';

const UserContext = React.createContext();

function AppContext({ children }) {
  const [user, setUser] = useState({ email: '' });
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await productsGetAll();
    setProducts(response);
  };

  const contextValue = {
    user,
    setUser,
    products,
    getProducts,
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
