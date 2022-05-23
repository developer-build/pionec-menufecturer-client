import React from "react";

const OrderRow = ({ order, index, setDeleteOrder }) => {
  const { name, toolsName, quantity, price } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{toolsName}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td className="space-x-2">
        {" "}
        <label
          onClick={() => setDeleteOrder(order)}
          for="my-modal-6"
          class="btn modal-button btn-sm btn-error"
        >
          Cancel
        </label>
        <button className="btn btn-sm btn-success">Pay</button>{" "}
      </td>
      <td>
        {!order.paid ? (
          <span className="text-error">Unpaid</span>
        ) : (
          "Transection Id"
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
