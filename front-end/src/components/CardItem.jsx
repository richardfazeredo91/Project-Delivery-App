import React from 'react';
import PropTypes from 'prop-types';

const CardItem = ({ product: { id, price, name, url_image: urlImage } }) => (
  <div>
    <h1 data-testid={ `customer_products__element-card-price-${id}` }>
      { price.replace(/\./, ',') }
    </h1>
    <img
      data-testid={ `customer_products__img-card-bg-image-${id}` }
      src={ urlImage }
      alt="placeholder"
    />
    <div>
      <p data-testid={ `customer_products__element-card-title-${id}` }>{ name }</p>
      <div>
        <button
          type="button"
          value="+"
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value="0"
        />
        <button
          type="button"
          value="-"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          +
        </button>

      </div>
    </div>
  </div>
);

CardItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardItem;
