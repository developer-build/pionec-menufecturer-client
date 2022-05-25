import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import auth from "../../shared/firebase.init";

const MakeAdmin = () => {
  //   const [adminUser, setAdminUser] = useState([]);
  //   const [user, setUser] = useState([]);
  //   useEffect(() => {
  //     fetch(`https://tranquil-earth-82270.herokuapp.com/user`, {
  //       method: "GET",
  //       headers: {
  //         authorization: `Bearar ${localStorage.getItem("accessToken")}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setUser(data));
  //   }, []);
  const makeAdmin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    if (!email) {
      toast.error("Hello");
    } else {
      fetch(`https://tranquil-earth-82270.herokuapp.com/user/admin/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <div>
      <div className="p-5 h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white py-10 font-koulen ">
          Make An Admin
        </h1>
        <div className="flex items-center justify-center">
          <div className="">
            <label htmlFor="" className="font-koulen mb-2 block pl-1">
              Email
            </label>
            <form onSubmit={makeAdmin} className="w-full flex space-x-2">
              <input
                type="Email"
                name="email"
                placeholder="jhon@gmail.com"
                className="input input-bordered w-80"
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
