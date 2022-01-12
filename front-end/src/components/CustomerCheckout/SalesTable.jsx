import React from 'react';
import PropTypes from 'prop-types';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';

function SalesTable({ sales }) {
  const { setShoppingCart } = useShoppingCartContext();

  function subTotal(quantity, price) {
    return (Number(quantity) * Number(price)).toFixed(2);
  }

  function removeFromCart(id) {
    const newProductList = sales.filter((product) => product.id !== id);
    setShoppingCart(newProductList);
  }

  function thMaker() {
    return (
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor unitário</th>
        <th>Sub-total</th>
        <th>Remover item</th>
      </tr>
    );
  }

  function tdMaker(index, { id, name, quantity, price }) {
    return (
      <tr key={ id }>
        <td>{index}</td>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>{subTotal(quantity, price)}</td>
        <td>
          <button type="button" onClick={ () => removeFromCart(id) }>
            Remover
          </button>
        </td>
      </tr>
    );
  }

  return (
    <table>
      <thead>
        { thMaker() }
      </thead>
      <tbody>
        { sales.map((sale, index) => tdMaker(index, sale)) }
      </tbody>
    </table>
  );
}

SalesTable.propTypes = {
  sales: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SalesTable;
