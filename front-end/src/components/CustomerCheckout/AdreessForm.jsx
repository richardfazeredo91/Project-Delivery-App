import React from 'react';

function AdreessForm() {
  return (
    <div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <form>
        {/* <label htmlFor="seller" /> */}
        P. Vendedora Responsável:
        <select name="seller" id="seller">
          <option value="v">vovó</option>
          <option value="vc">vovô</option>
        </select>
        <label htmlFor="address">
          Endereço
          <input
            type="text"
            name="address"
            id="address"
            data-testid=""
            onChange={ () => {} }
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            type="number"
            name="number"
            id="number"
            data-testid=""
            onChange={ () => {} }
          />
        </label>
        <button
          type="submit"
          data-testid=""
          // disabled={ !enableButton }
          onClick={ () => {} }
        >
          Finalizar pedido
        </button>
      </form>
    </div>
  );
}

export default AdreessForm;
