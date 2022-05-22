import React from "react";
import Navber from "../shared/Navber";
import googleImg from "../assests/imges/icons/google-logo-png-29546.png";
import { Link, useNavigate } from "react-router-dom";
import auth from "../shared/firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Spinner from "../shared/Spinner";
import { useForm } from "react-hook-form";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  if (user || gUser) {
    navigate("/");
  }
  if (loading || gLoading) {
    return <Spinner />;
  }
  let errorMsg;
  if (error || gError) {
    if (error?.message.includes("auth/user-not-found"))
      errorMsg = (
        <p className="text-[12px] text-red-600 pl-1 ">User not exist!</p>
      );
    else if (gError?.message.includes("auth/popup-closed-by-user")) {
      errorMsg = (
        <p className="text-[12px] text-red-600 pl-1 ">Google Popup Closed</p>
      );
    } else if (error?.message.includes("auth/wrong-password")) {
      errorMsg = (
        <p className="text-[12px] text-red-600 pl-1">Wrong Password !</p>
      );
    } else {
      errorMsg = (
        <p className="text-sm text-red-600 pl-1">
          {error?.message} {gError?.message}
        </p>
      );
    }
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="bg-base-100">
      <Navber></Navber>
      <div className="h-full md:h-screen   my-10 lg:my-0 container flex justify-center items-center">
        <div className="w-full  md:w-[50%] lg:w-[33%]">
          {/* <img className="h-[60px] mx-auto w-40" src={""} alt="" /> */}
          <div className="  pb-8 px-4 md:px-10  bg-accent rounded-xl mt-10">
            <h1 className="text-center text-3xl font-semibold pt-8 pb-10 uppercase text-secondary">
              Welcome <span className="text-primary">Back</span>
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col ">
                <input
                  type="email"
                  placeholder="Email"
                  class="input w-full placeholder:text-[15px] mb-3 py-5"
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
                  class="input w-full placeholder:text-[15px] py-5 my-3 "
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
                  <span className="label-text-alt text-red-600   pl-1">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600   pl-1">
                    {errors.password.message}
                  </span>
                )}
                {errorMsg}
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex pl-1 items-center ">
                  <input
                    type="checkbox"
                    name=""
                    className="checkbox checkbox-sm checkbox-primary  mr-3"
                    id=""
                  />
                  <span className="text-sm  text-gray-500 ">Remember me</span>
                </div>
                <p className="text-sm  text-gray-500 ">Forget Password?</p>
              </div>

              <button
                type="submit"
                className="px-8 mt-7 text-lg w-full  rounded py-2 font-semibold font-koulen hover:bg-orange-700 transition duration-300 ease-in-out bg-primary text-gray-900"
              >
                Login
              </button>
              <p className="text-sm mt-3 text-center text-gray-500">
                Don't have and account ?{" "}
                <Link to="/signup" className="text-orange-600">
                  Create Account
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
  );
};

export default Login;
