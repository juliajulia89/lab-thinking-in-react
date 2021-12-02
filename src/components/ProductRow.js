import React from 'react';
import data from '../data.json';

function ProductRow(props) {
  return (
    <tr>
      <td>{props.items}</td>
      <td>{props.prices}</td>
    </tr>
  );
}

export default ProductRow;
