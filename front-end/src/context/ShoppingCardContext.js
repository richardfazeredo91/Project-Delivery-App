import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MyShoppingCardContext = React.createContext();

function ShoppingCardContext({ children }) {
  const [products, setProducts] = useState({});

  useEffect(() => {
    console.log('entrou no usereffect do context do shopping card');
  }, [products]);

  const contextValue = {
    setProducts,
    products,
  };

  return (
    <MyShoppingCardContext.Provider value={ contextValue }>
      {children}
    </MyShoppingCardContext.Provider>
  );
}

export default ShoppingCardContext;

const useShoppingCardContext = () => useContext(MyShoppingCardContext);

export { useShoppingCardContext };

ShoppingCardContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
