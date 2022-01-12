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
      <tr
        key={ id }
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        <td data-testid={ `element-order-table-name-${index}` }>{index}</td>
        <td data-testid={ `element-order-table-name-${index}` }>{name}</td>
        <td data-testid={ `element-order-table-quantity-${index}` }>{quantity}</td>
        <td data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
          {price}
        </td>
        <td data-testid={ `element-order-table-sub-total-${index}` }>
          {subTotal(quantity, price)}
        </td>
        <td data-testid={ `element-order-table-remove-${index}` }>
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
