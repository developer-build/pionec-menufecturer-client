import React from "react";

const ProductsRow = ({ index, product, setDeleteProduct }) => {
  const { img, availableQuantity, name,  } = product;

  return (
    <tr className="hover bg-black">
      <th className="capitalize font-semibold text-gray-600 ">{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td className="capitalize font-semibold ">{name}</td>
      <td className=" font-semibold text-secondary">{availableQuantity}</td>
    
      <td className="capitalize font-semibold text-gray-600">
        <label
          onClick={() => setDeleteProduct(product)}
          htmlFor="my-modal-7"
          className="btn  btn-sm btn-error modal-button"
        >
          delete
        </label>
      </td>
    </tr>
  );
};

export default ProductsRow;
