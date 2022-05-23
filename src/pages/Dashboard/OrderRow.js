import React from 'react';

const OrderRow = () => {
    return (
      <tr>
        <th>{index + 1}</th>
        <td>{order.name}</td>
        <td>{order.toolsName}</td>
        <td>{order.quantity}</td>
        <td>${order.price}</td>
        <td>
          {" "}
          <button className="btn btn-sm btn-error">Cancel</button>{" "}
          <label
            onClick={() => setDeleteOrder(order)}
            for="my-modal"
            class="btn modal-button"
          >
            open modal
          </label>
          <button className="btn btn-sm btn-success">Pay</button>{" "}
        </td>
      </tr>
    );
};

export default OrderRow;