import React from 'react';

const CardItem = () => {
  return (
    <div>
      <h1 data-testid="customer_products__element-card-price-">Price</h1>
      <img
        data-testid="customer_products__img-card-bg-image-"
        src="https://via.placeholder.com/150"
        alt="placeholder"
      />
      <div>
        <p data-testid="customer_products__element-card-title-">Title</p>
        <div>
          <button
            type="button"
            data-testid="customer_products__button-card-rm-item-"
          >
            --
          </button>
          <p data-testid="customer_products__input-card-quantity-">0</p>
          <button
            type="button"
            data-testid="customer_products__button-card-add-item-"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
