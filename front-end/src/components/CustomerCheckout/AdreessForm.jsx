import React from 'react';

function AdreessForm() {
  // const [seller, setSeller] = useState('');
  // const [address, setAddress] = useState('');
  // const [number, setNumber] = useState(0);

  // function optionsSellersMaker() {
//  colocar função get para pegar os vendedores e fazer um map com a resposta
//  Colocar função req aqui no na page e passar por parametro
  // }
  return (
    <div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <form>
        {/* <label htmlFor="seller" /> */}
        P. Vendedora Responsável:
        <select
          name="seller"
          id="seller"
          data-testid="customer_checkout__select-seller"
        >
          <option value="v">vovó</option>
          <option value="vc">vovô</option>
        </select>
        <label htmlFor="address">
          Endereço
          <input
            type="text"
            name="address"
            id="address"
            data-testid="customer_checkout__input-address"
            onChange={ () => {} }
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            type="number"
            name="number"
            id="number"
            data-testid="customer_checkout__input-addressNumber"
            onChange={ () => {} }
          />
        </label>
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
          // disabled={ !enableButton }
          onClick={ () => {} }
          /*  O conteudo dessa req será
          products(array com productId e quantity),sellerName, totalPrice, deliveryAddress,deliveryNumber
          PEgar o id do retorno e redirecionar para proxima tela */
        >
          Finalizar pedido
        </button>
      </form>
    </div>
  );
}

export default AdreessForm;
