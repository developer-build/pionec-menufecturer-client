import React, { useEffect, useState } from "react";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/order")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  return (
    <div className="bg-secondary h-screen ">
      <div className="bg-secondary py-10">
        <div className=" mx-10">
          <h1 className="text-3xl font-koulen text-center font-semibold uppercase text-primary  mb-3">
            Total Orders
          </h1>
     
          <div>
            <div class="overflow-x-auto">
              <table class="table table-zebra w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {allOrders.map((order, index) => (
                    <tr key={order._id}>
                      <th>{index + 1}</th>
                      <td>{order.toolsName}</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
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
