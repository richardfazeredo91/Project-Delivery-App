import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useShoppingCartContext } from '../context/ShoppingCartContext';

const CardItem = ({ product: { id, price, name, url_image: urlImage } }) => {
  const { products, setProducts } = useShoppingCartContext();
  const [quantity, setQuantity] = useState(0);

  function handleCardQuantityProducts(e) {
    let updateProduct;

    switch (e.target.name) {
    case 'subtract':
      console.log('subtract');
      if (quantity === 0) break;

      if (quantity === 1) {
        setQuantity(quantity - 1);
        updateProduct = products.filter((product) => product.id !== id);
        setProducts(updateProduct);
        break;
      }

      setQuantity(quantity - 1);
      updateProduct = products.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      setProducts(updateProduct);
      break;
    case 'add':
      console.log('add');
      if (quantity === 0) {
        setQuantity(quantity + 1);
        updateProduct = { id, name, quantity: 1, price };
        setProducts([...products, updateProduct]);
        break;
      }

      updateProduct = products.map((product) => {
        if (product.id === id) return { ...product, quantity: product.quantity + 1 };
        return product;
      });
      setQuantity((quantity + 1));
      setProducts(updateProduct);
      break;
    default:
      console.log(`Sorry, we are out of ${e.target.name}.`);
    }
  }

  function handleInputQuantity(e) {
    const inputNumber = Number(e.target.value);
    let updateProduct;

    if (quantity === 0) {
      setQuantity(inputNumber);
      const updatedProduct = { id, name, quantity: inputNumber, price };
      setProducts([...products, updatedProduct]);
      return;
    }

    if (!inputNumber) {
      setQuantity(inputNumber);
      updateProduct = products.filter((product) => product.id !== id);
      setProducts(updateProduct);
      return;
    }

    setQuantity(inputNumber);
    updateProduct = products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: inputNumber };
      }
      return product;
    });

    setProducts(updateProduct);
  }

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
            +
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ quantity }
            type="number"
            onChange={ handleInputQuantity }
          />
          <button
            type="button"
            name="subtract"
            value="-"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ handleCardQuantityProducts }
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
