import React from 'react';

function SalesTable() {
  return (
    <table>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor unitário</th>
        <th>Sub-total</th>
        <th>Remover item</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Cerveja</td>
        <td>2</td>
        <td>$50</td>
        <td>$100</td>
        <td>Remover</td>
      </tr>
    </table>
  );
}

export default SalesTable;
