import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import fetcher from "../../api";
import auth from "../../shared/firebase.init";
import Spinner from "../../shared/Spinner";

import DeleteModal from "./DeleteModal";
import OrderRow from "./OrderRow";

const MyOrders = () => {
  //   const [orders, setOrders] = useState([]);
  const [deleteOrder, setDeleteOrder] = useState(null);
  const [user] = useAuthState(auth);
  const email = user?.email;
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:4000/order?email=${email}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="bg-secondary h-full w-full text-accent pt-8 pb-16">
      <h1 className="text-3xl font-koulen text-center font-semibold uppercase text-primary">
        My Orders
      </h1>
      <div className="pt-5 px-10 text-white">
        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Tools Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Order</th>
                <th>Transection Id</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {orders.map((order, index) => (
                <OrderRow
                  key={index}
                  index={index}
                  setDeleteOrder={setDeleteOrder}
                  order={order}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deleteOrder && (
        <DeleteModal
          setDeleteOrder={setDeleteOrder}
          order={deleteOrder}
          refetch={refetch}
        ></DeleteModal>
      )}
    </div>
  );
};

export default MyOrders;
