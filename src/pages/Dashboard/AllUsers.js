import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../shared/Spinner";

import UserRow from "./UserRow";

const Users = () => {
  const { isLoading, data, refetch } = useQuery("users", () =>
    fetch("http://localhost:4000/user", {
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
          total users
        </h1>
        {/* --------table--------- */}
        <div className="pt-5  px-10 text-white">
          <div class="overflow-x-auto">
            <table class="table table-zebra mb-10 w-7/12 mx-auto">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th className=" "></th>
                  <th className="">Email</th>
                  <th className="">Admin</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}

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
      {/* <div className="overflow-x-auto px-5 mb-10">
        <table className="table w-full">
          <thead>
            <tr className=" uppercase">
              <th className=" "></th>
              <th className="text-lg">Email</th>
              <th className="text-lg">Admin</th>
              <th className="text-lg">Remove </th>
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
      </div> */}
    </div>
  );
};

export default Users;
