import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import getSubtotal from '../utils/detailsProduct';

const DetailsProduct = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProductDetails = fetch(`http://localhost:3001/sale/details/:${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('user').token,
      },
    })
      .then((response) => response.json())
      .then((data) => data);

    setDetails(getProductDetails);
  });

  const orderDetailsPannel = () => (
    <table>
      <thead>
        <tr>
          <th
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
          </th>
          <th
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {details.sellerId}
          </th>
          <th
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {details.saleDate}
          </th>
          <th
            data-testid="customer_order_details__element-order-details-label-delivery-status"
          >
            {details.status}
          </th>
          <th
            data-testid="customer_order_details__button-delivery-check"
          >
            <button
              type="button"
              onClick={ setDetails({ ...details, status: 'ENTREGUE' }) }
            >
              MARCAR COMO ENTREGUE
            </button>
          </th>
        </tr>
        <tr>
          <th
            data-testid="customer_order_details__element-order-table-item-number-"
          >
            Item
          </th>
          <th
            data-testid="customer_order_details__element-order-table-name-"
          >
            Descrição
          </th>
          <th
            data-testid="customer_order_details__element-order-table-quantity-"
          >
            Quantidade
          </th>
          <th
            data-testid="customer_order_details__element-order-table-sub-total-"
          >
            Valor unitário
          </th>
          <th
            data-testid="customer_order_details__element-order-total-price-"
          >
            Sub-total
          </th>
        </tr>
      </thead>
      <tbody>
        { shoppingCart.map(({ id, name, quantity, price }, index) => (
          <tr key={ index }>
            <td>{id}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{getSubtotal()}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>
            {details.totalPrice.replace(/\./, ',')}
          </td>
        </tr>
      </tfoot>
    </table>
  );

  return (
    <>
      <Header />
      <h3>Detalhe do Pedido</h3>
      {orderDetailsPannel()}
    </>
  );
};

export default DetailsProduct;
