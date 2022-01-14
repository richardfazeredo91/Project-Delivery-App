import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useShoppingCartContext } from '../context/ShoppingCartContext';

const CardItem = ({ product: { id, price, name, url_image: urlImage } }) => {
  const { shoppingCart, setShoppingCart } = useShoppingCartContext();
  const [quantity, setQuantity] = useState(0);
  const [isOnCart, setIsOnCart] = useState(false);

  const removeFromCart = () => {
    const newProductList = shoppingCart.filter((product) => product.id !== id);
    setShoppingCart(newProductList);
    setIsOnCart(false);
  };

  const addToCart = () => {
    const newProduct = { id, name, quantity, price };
    setShoppingCart([...shoppingCart, newProduct]);
    setIsOnCart(true);
  };

  const updateQauntity = () => {
    const newProductList = shoppingCart.map((product) => {
      if (product.id === id) {
        return { ...product, quantity };
      }
      return product;
    });

    setShoppingCart(newProductList);
  };

  const handleShopingCart = () => {
    if (quantity === 0) removeFromCart();
    else if (!isOnCart) addToCart();
    else updateQauntity();
  };

  useEffect(() => {
    handleShopingCart();
  }, [quantity]);

  return (
    <div>
      <h1 data-testid={ `customer_products__element-card-price-${id}` }>
        { price.replace(/\./, ',') }
      </h1>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt="placeholder"
        width="100px"
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
            onClick={ () => setQuantity(quantity + 1) }
          >
            +
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ quantity }
            type="number"
            onChange={ (e) => setQuantity(e.target.value > 0 ? e.target.value : 0) }
          />
          <button
            type="button"
            name="subtract"
            value="-"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ () => setQuantity(quantity > 0 ? quantity - 1 : 0) }
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardItem;
