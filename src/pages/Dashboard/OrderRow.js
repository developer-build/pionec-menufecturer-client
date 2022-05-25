import React from "react";
import { Link, useNavigate } from "react-router-dom";

const OrderRow = ({ order, index, setDeleteOrder }) => {
  const { _id, name, toolsName, quantity, price } = order;
  const navigate = useNavigate();
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{toolsName}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td className="space-x-2">
        {order.price && order.paid && (
          <div>
            <p>
              <span className="text-success">Paid</span>
            </p>
          </div>
        )}
        {!order.paid && (
          <>
            <label
              onClick={() => setDeleteOrder(order)}
              htmlFor="my-modal-6"
              className="btn modal-button btn-sm btn-error"
            >
              Cancel
            </label>
            <button
              className="btn btn-sm btn-success"
              onClick={() => navigate(`/dashboard/payments/${_id}`)}
            >
              Pay
            </button>
          </>
        )}
      </td>

      <td className="capitalize font-semibold text-gray-600">
        {order.price && order.paid && (
          <>
            <p>
              <span className="text-success">{order.transactionId}</span>
            </p>
          </>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
