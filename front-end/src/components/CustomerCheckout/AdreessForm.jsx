import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import getAllSellers from '../../server/getAllSellers';
import saleAttempt from '../../server/saleAttempt';

function AdreessForm({ allProducts, totalPrice }) {
  const [seller, setSeller] = useState([]);
  const [sellerName, setSellerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const getSellersFromApi = async () => {
      const sellers = await getAllSellers();
      const sellersNames = sellers.map(({ name, id }) => ({ name, id }));
      setSeller(sellersNames);
    };
    getSellersFromApi();
  }, []);

  async function confirmCheckout(e) {
    e.preventDefault();
    const responseSaleAttempt = await saleAttempt(allProducts, {
      sellerName,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
    });

    navigate(`/customer/orders/${responseSaleAttempt.id}`);
  }

  return (
    <div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <form>
        P. Vendedora Responsável:
        <select
          name="seller"
          id="seller"
          data-testid="customer_checkout__select-seller"
          onChange={ ({ target }) => setSellerName(target.value) }
        >
          <option value="">Selecione um nome</option>
          {seller.length ? seller.map(({ name, id }) => (
            <option key={ id } value={ name }>{ name }</option>
          )) : null}
        </select>

        <label htmlFor="address">
          Endereço
          <input
            type="text"
            name="address"
            id="address"
            data-testid="customer_checkout__input-address"
            onChange={ ({ target }) => setDeliveryAddress(target.value) }
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            type="number"
            name="number"
            id="number"
            data-testid="customer_checkout__input-addressNumber"
            onChange={ ({ target }) => setDeliveryNumber(target.value) }
          />
        </label>
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
          onClick={ (e) => confirmCheckout(e) }
        >
          Finalizar pedido
        </button>
      </form>
    </div>
  );
}

AdreessForm.propTypes = {
  allProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default AdreessForm;
