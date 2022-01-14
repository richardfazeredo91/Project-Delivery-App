import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function OrderCard(
  { order: { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber } },
) {
  const { role } = JSON.parse(localStorage.getItem('user'));

  const prefix = {
    customer: 'customer_orders',
    seller: 'seller_orders',
  };

  const formatDate = (date) => {
    const n = 10;
    const formatedDate = date.substring(0, n);
    const dateArr = formatedDate.split('-');
    return `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
  };

  return (
    <div>
      <Link to={ `customer/orders/${id}` }>
        <p data-testid={ `${prefix[role]}__element-order-id-${id}` }>
          {id}
        </p>
        <p data-testid={ `${prefix[role]}__element-delivery-status-${id}` }>
          {status}
        </p>
        <p data-testid={ `${prefix[role]}__element-order-date-${id}` }>
          {formatDate(saleDate)}
        </p>
        <p data-testid={ `${prefix[role]}__element-card-price-${id}` }>
          {totalPrice.replace(/\./, ',')}
        </p>
        {(role === 'seller')
          ? <p
            data-testid={ `${prefix[role]}__element-card-address-${id}` }
          >
            {`${deliveryAddress} ${deliveryNumber}`}
          </p>
          : null}
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
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
  }).isRequired,
};
