import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../shared/firebase.init";
import Navber from "../shared/Navber";
const Purchase = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navber></Navber>
      <div>
        <div>
          <div className="h-full md:h-screen   my-10 lg:my-0 container flex justify-center items-center">
            <div className="w-full  md:w-[50%] lg:w-[33%]">
              <div className="  pb-8 px-4 md:px-10  bg-secondary rounded-xl mt-10">
                <h1 className="text-center text-3xl font-semibold pt-8 pb-10 uppercase text-secondary">
                  Join <span className="text-primary">with</span> Us
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col ">
                    <input
                      type="text"
                      placeholder="Name"
                      class="input w-full placeholder:text-[15px] py-5 mb-3 "
                      defaultValue={user.displayName}
                      disabled
                      {...register("name",{value:user.displayName})}
                    />

                    <input
                      type="text"
                      placeholder="Email"
                      class="input w-full placeholder:text-[15px] py-5 my-3"
                      defaultValue={user.email}
                      disabled
                      {...register("email",{value:user.email})}
                    />

                    <input
                      type="password"
                      placeholder="Password"
                      class="input w-full placeholder:text-[15px] py-5 my-3"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-8 mt-5 text-lg w-full  rounded py-2 font-semibold font-koulen hover:bg-orange-700 transition duration-300 ease-in-out bg-primary text-gray-900"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
