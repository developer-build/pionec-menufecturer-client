import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../shared/Spinner";
const AllOrders = () => {
  // const [allOrders, setAllOrders] = useState([]);
  const {
    isLoading,
    data: allOrders,
    refetch,
  } = useQuery("shippingStatus", () =>
    fetch(`https://tranquil-earth-82270.herokuapp.com/order`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }
  const updateStatus = (id) => {
    fetch(`https://tranquil-earth-82270.herokuapp.com/shipping-order/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearar ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          refetch();
        }
      });
  };
  return (
    <div className="bg-secondary h-screen ">
      <div className="bg-secondary py-10">
        <div className=" mx-10">
          <h1 className="text-3xl font-koulen text-center font-semibold uppercase text-primary  mb-3">
            Total Orders
          </h1>

          <div>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Tools Name</th>
                    <th>Payment Status</th>
                    <th>Shipping Status</th>
                  </tr>
                </thead>
                <tbody>
                  {allOrders.map((order, index) => (
                    <tr key={order._id}>
                      <th>{index + 1}</th>
                      <td>{order.name}</td>
                      <td>{order.email}</td>
                      <td>{order.toolsName}</td>
                      <td>
                        {order.paid ? (
                          <span className="text-green-600">Paid</span>
                        ) : (
                          <span className="text-red-600">Not Paid</span>
                        )}
                      </td>
                      <td>
                        {order.paid && !order.ship && (
                          <button
                            onClick={() => updateStatus(order._id)}
                            className="btn btn-sm btn-warning"
                          >
                            Pending
                          </button>
                        )}
                        {order.ship && (
                          <span className="text-secondary font-koulen font-bold">
                            Shipped
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
