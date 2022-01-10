import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CardItem = ({ product: { id, price, name, url_image: urlImage } }) => {
  const [quantity, setQuantity] = useState(0);

  function handleCardQuantityProducts(e) {
    switch (e.target.name) {
    case 'subtract':
      console.log('subtract');
      if (quantity === 0) break;
      setQuantity(quantity - 1);
      break;
    case 'add':
      console.log('add');
      setQuantity(quantity + 1);
      break;
    default:
      console.log(`Sorry, we are out of ${e.target.name}.`);
    }
  }

  useEffect(() => {
    handleShoppingCart(id, price, name, quantity);
  }, [quantity])

  return (
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
        <p data-testid={ `customer_products__element-card-title-${id}` }>
          { name }
        </p>
        <div>
          <button
            type="button"
            name="add"
            value="+"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ handleCardQuantityProducts }
          >
            -
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ quantity }
          />
          <button
            type="button"
            name="subtract"
            value="-"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ handleCardQuantityProducts }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardItem;
