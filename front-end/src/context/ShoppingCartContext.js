import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MyShoppingCartContext = React.createContext();

function ShoppingCartContext({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState('0');

  useEffect(() => {
    console.log('entrou no usereffect do context do shopping card', shoppingCart);
    const sumAllValueProducts = shoppingCart.reduce(
      (totalValue, item) => (Number(item.quantity) * Number(item.price)) + totalValue,
      0,
    ).toFixed(2);
    console.log('sumAllValueProducts---->', sumAllValueProducts);
    setTotalPrice(String(sumAllValueProducts));
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const contextValue = {
    setShoppingCart,
    shoppingCart,
    totalPrice,
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
