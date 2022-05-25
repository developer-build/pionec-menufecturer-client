import React from "react";
import toast from "react-hot-toast";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:4000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to made admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfuly made an admin");
          refetch();
        }
      });
  };
  return (
    <>
      <tr className="">
        <th className=" ">{index + 1}</th>
        <td className=" ">{email}</td>

        <td className="capitalize font-semibold ">
          {role !== "admin" && (
            <button className="btn btn-primary  btn-sm" onClick={makeAdmin}>
              Make admin
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default UserRow;
