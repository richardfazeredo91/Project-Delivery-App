import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MyShoppingCartContext = React.createContext();

function ShoppingCartContext({ children }) {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState('0');

  useEffect(() => {
    console.log('entrou no usereffect do context do shopping card', products);
    const sumAllValueProducts = products.reduce(
      (totalValue, item) => (Number(item.quantity) * Number(item.price)) + totalValue,
      0,
    ).toFixed(2);
    console.log('sumAllValueProducts---->', sumAllValueProducts);
    setTotalPrice(String(sumAllValueProducts));
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const contextValue = {
    setProducts,
    products,
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
