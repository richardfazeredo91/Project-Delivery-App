import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useAppContext } from '../context/AppContext';
import getSubtotal from '../utils/detailsProduct';
import formatDate from '../utils/dateUtils/formatDate';
import updateStatus from '../server/updateStatus';

const DetailsProduct = () => {
  const { orderDetails, getDetails } = useAppContext();
  // const [details, setDetails] = useState({});
  const { id } = useParams();

  console.log(id);

  const { role } = JSON.parse(localStorage.getItem('user'));

  const EL_OR = '__element-order';

  const prefix = {
    customer: 'customer_order_details',
    seller: 'seller_order_details',
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user.token) {
      localStorage.clear();
      navigate('/');
    }
    console.log('useeffect');
    getDetails(id);
  }, []);

  console.log(orderDetails, 'page');

  const orderDetailsPannel = () => (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {orderDetails.products
          .map(({ id: productId, name, quantity, price }, index) => (
            <tr key={ index }>
              <td data-testid={ `${prefix[role]}${EL_OR}-table-item-number-${index}` }>
                {productId}
              </td>
              <td data-testid={ `${prefix[role]}${EL_OR}-table-name-${index}` }>
                {name}
              </td>
              <td data-testid={ `${prefix[role]}${EL_OR}-table-quantity-${index}` }>
                {quantity}
              </td>
              <td data-testid={ `${prefix[role]}${EL_OR}-table-sub-total-${index}` }>
                {price.replace(/\./, ',')}
              </td>
              <td>
                {getSubtotal(quantity, price).replace(/\./, ',')}
              </td>
            </tr>
          ))}
      </tbody>
      <tfoot>
        <tr>
          <td data-testid={ `${prefix[role]}${EL_OR}-total-price` }>
            Total: R$
            {orderDetails.totalPrice.replace(/\./, ',')}
          </td>
        </tr>
      </tfoot>
    </table>
  );

  const renderOrderHeader = () => (
    <div>
      <p
        data-testid={ `${prefix[role]}${EL_OR}-details-label-order-id` }
      >
        Pedido Nº
        { id }
      </p>
      {(role === 'customer') ? (
        <p
          data-testid={ `${prefix[role]}${EL_OR}-details-label-seller-name` }
        >
          {orderDetails.sellerName}
        </p>)
        : null}
      <p
        data-testid={ `${prefix[role]}${EL_OR}-details-label-order-date` }
      >
        {formatDate(orderDetails.saleDate)}
      </p>
      <p
        data-testid={ `${prefix[role]}${EL_OR}-details-label-delivery-status` }
      >
        {orderDetails.status}
      </p>
      {(role === 'customer') ? (
        <button
          data-testid={ `${prefix[role]}__button-delivery-check` }
          type="button"
          onClick={ () => updateStatus(id, 'Entregue') }
          disabled={ orderDetails.status !== 'Em Trânsito' }
        >
          MARCAR COMO ENTREGUE
        </button>)
        : null}
      {(role === 'seller') ? (
        <>
          <button
            data-testid={ `${prefix[role]}__button-preparing-check` }
            type="button"
            onClick={ () => updateStatus(id, 'Preparando') }
            disabled={ orderDetails.status !== 'Pendente' }
          >
            PREPARAR PEDIDO
          </button>
          <button
            data-testid={ `${prefix[role]}__button-dispatch-check` }
            type="button"
            onClick={ () => updateStatus(id, 'Em Trânsito') }
            disabled={ orderDetails.status !== 'Preparando' }
          >
            SAIU PARA ENTREGA
          </button>
        </>)
        : null}
    </div>
  );

  return (
    <>
      <Header />
      <h3>Detalhe do Pedido</h3>
      {(!orderDetails || orderDetails.message)
        ? (null)
        : (renderOrderHeader())}
      {(!orderDetails || orderDetails.message)
        ? (<h3>pedido Não Encontrado</h3>)
        : (orderDetailsPannel())}
    </>
  );
};

export default DetailsProduct;
