import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../shared/Spinner";

import UserRow from "./UserRow";

const Users = () => {
  const { isLoading, data, refetch } = useQuery("totalUsers", () =>
    fetch("https://tranquil-earth-82270.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="bg-secondary h-screen ">
      <div className="bg-secondary">
        <h1 className="text-3xl font-koulen text-center font-semibold uppercase text-primary pt-8 mb-3">
          make an admin
        </h1>
        {/* --------table--------- */}
        <div className="pt-5  px-10 text-white">
          <div className="overflow-x-auto">
            <table className="table table-zebra mb-10 w-7/12 mx-auto">
              <thead>
                <tr>
                  <th className=" "></th>
                  <th className="">Email</th>
                  <th className="">Admin</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <UserRow
                    key={user._id}
                    index={index}
                    user={user}
                    refetch={refetch}
                  ></UserRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
