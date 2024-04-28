import React from "react";

function TransactionItems({ Date, Description, Category, Amount }) {
  return (
    <tr>
      <td>{Date}</td>
      <td>{Description}</td>
      <td>{Category}</td>
      <td>{Amount}</td>
    </tr>
  );
}
export default TransactionItems;
