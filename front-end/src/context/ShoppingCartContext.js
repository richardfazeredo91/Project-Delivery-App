import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MyShoppingCartContext = React.createContext();

function ShoppingCartContext({ children }) {
  const [products, setProducts] = useState({});

  useEffect(() => {
    console.log('entrou no usereffect do context do shopping card');
  }, [products]);

  const contextValue = {
    setProducts,
    products,
  };

  return (
    <MyShoppingCartContext.Provider value={ contextValue }>
      {children}
    </MyShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;

const useShoppingCartContext = () => useContext(MyShoppingCartContext);

export { useShoppingCartContext };

ShoppingCartContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
