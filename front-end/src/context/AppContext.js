import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import productsGetAll from '../server/productsGetAll';

const MyContext = React.createContext();

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
    <MyContext.Provider value={ contextValue }>{children}</MyContext.Provider>
  );
}

export default AppContext;

const useAppContext = () => useContext(MyContext);

export { useAppContext };

AppContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
