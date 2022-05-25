import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../shared/firebase.init";
import Spinner from "../../shared/Spinner";



import DeleteProductModal from "./DeleteProductModal";
import ProductsRow from "./ProductsRow";


const ManageProducts = () => {
  const [deleteProduct, setDeleteProduct] = useState(null);
  const navigate = useNavigate();
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("prodcutCollection", () =>
    fetch(`http://localhost:4000/tool`, {
      method: "GET",
      headers: {
        authorization: `Bearar ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Spinner/>
  }
  return (
    <div className="bg-secondary h-full w-full text-accent pt-8 pb-16">
      <h1 className="text-3xl font-koulen text-center font-semibold uppercase text-primary">
        Manage Total Orders
      </h1>
      <div className="pt-5 bg-secondary pb-20 px-10 text-white">
        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Tools Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
                
              
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {products.map((product, index) => (
                <ProductsRow
                  key={index}
                  index={index}
                  setDeleteProduct={setDeleteProduct}
                  product={product}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deleteProduct && (
        <DeleteProductModal
          setDeleteProduct={setDeleteProduct}
          product={deleteProduct}
          refetch={refetch}
        ></DeleteProductModal>
      )}
    </div>
  );
};

export default ManageProducts;