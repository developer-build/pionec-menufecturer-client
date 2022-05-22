import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Navber from '../shared/Navber';
const Purchase = () => {
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
      console.log(data);
    };
    return (
      <div>
        <Navber></Navber>
        <div>
          <div>
            <div className="h-full md:h-screen   my-10 lg:my-0 container flex justify-center items-center">
              <div className="w-full  md:w-[50%] lg:w-[33%]">
                <div className="  pb-8 px-4 md:px-10  bg-accent rounded-xl mt-10">
                  <h1 className="text-center text-3xl font-semibold pt-8 pb-10 uppercase text-secondary">
                    Join <span className="text-primary">with</span> Us
                  </h1>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col ">
                      <input
                        type="text"
                        placeholder="Name"
                        class="input w-full placeholder:text-[15px] py-5 mb-3 "
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Name is required!",
                          },
                        })}
                      />
                      {errors.name?.type === "required" && (
                        <span className="label-text-alt text-red-600  pl-1">
                          {errors.name.message}
                        </span>
                      )}
                      <input
                        type="text"
                        placeholder="Email"
                        class="input w-full placeholder:text-[15px] py-5 my-3"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is required!",
                          },
                          pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "Enter valid email!",
                          },
                        })}
                      />
                      {errors.email?.type === "required" && (
                        <span className="label-text-alt text-red-600  pl-1">
                          {errors.email.message}
                        </span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span className="label-text-alt text-red-600  pl-1">
                          {errors.email.message}
                        </span>
                      )}
                      <input
                        type="password"
                        placeholder="Password"
                        class="input w-full placeholder:text-[15px] py-5 my-3"
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Password is required!",
                          },
                          minLength: {
                            value: 6,
                            message: "Must be 6 characters or longer",
                          },
                        })}
                      />
                      {errors.password?.type === "required" && (
                        <span className="label-text-alt text-red-600  pl-1">
                          {errors.password.message}
                        </span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span className="label-text-alt text-red-600  pl-1">
                          {errors.password.message}
                        </span>
                      )}

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