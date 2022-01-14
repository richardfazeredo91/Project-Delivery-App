import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function OrderCard({ order: { id, status, saleDate, totalPrice } }) {
  const formatDate = (date) => {
    const n = 10;
    const formatedDate = date.substring(0, n);
    const dateArr = formatedDate.split('-');
    return `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
  };

  return (
    <div>
      <Link to={ `customer/orders/${id}` }>
        <p data-testid={ `customer_orders__element-order-id-${id}` }>
          {id}
        </p>
        <p data-testid={ `customer_orders__element-delivery-status-${id}` }>
          {status}
        </p>
        <p data-testid={ `customer_orders__element-order-date-${id}` }>
          {formatDate(saleDate)}
        </p>
        <p>
          {totalPrice.replace(/\./, ',')}
        </p>
      </Link>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
};
