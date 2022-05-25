import React from "react";
import Navber from "../shared/Navber";
import googleImg from "../assests/imges/icons/google-logo-png-29546.png";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../shared/firebase.init";
import Spinner from "../shared/Spinner";
import { useForm } from "react-hook-form";
import Footer from "../shared/Footer";
import useToken from "../hooks/useToken";
const Signup = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [token] = useToken(user || gUser);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  if (gLoading || loading || updating) {
    return <Spinner></Spinner>;
  }
  if (token) {
    navigate("/");
  }
  let errorMsg;
  if (error || gError) {
    if (error?.message.includes("auth/email-already-exists"))
      errorMsg = (
        <p className="text-sm text-red-500 pl-1">Email Already exists!</p>
      );
    else if (gError?.message.includes("closed")) {
      errorMsg = (
        <p className="text-sm text-red-500 pl-1 m-1">Google Popup Closed !</p>
      );
    } else {
      errorMsg = (
        <p className="text-sm text-red-500 pl-1">
          {error?.message} {gError?.message}
        </p>
      );
    }
  }
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div>
      <div className="bg-base-100">
        <Navber></Navber>
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
                    className="input w-full placeholder:text-[15px] py-5 mb-3 "
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
                    className="input w-full placeholder:text-[15px] py-5 my-3"
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
                    className="input w-full placeholder:text-[15px] py-5 my-3"
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
                  {errorMsg}
                </div>

                <button
                  type="submit"
                  className="px-8 mt-5 text-lg w-full  rounded py-2 font-semibold font-koulen hover:bg-orange-700 transition duration-300 ease-in-out bg-primary text-gray-900"
                >
                  Sign Up
                </button>
                <p className="text-sm mt-3 text-center text-gray-500">
                  Already have an account ?{" "}
                  <Link to="/login" className="text-orange-600">
                    Login
                  </Link>
                </p>
                <div className="divider my-5 ">Or</div>
                <div
                  className="ring-2 ring-secondary rounded-full  py-2 text-accent text-center relative cursor-pointer"
                  onClick={() => signInWithGoogle()}
                >
                  <span className="text-secondary capitalize font-semibold">
                    Continue With Google
                  </span>
                  <img
                    className="h-10 absolute top-0 left-0 w-10"
                    src={googleImg}
                    alt=""
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
