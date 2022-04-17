import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import logo from "../../images/logo.png";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const handelLogin = async (e) => {
    const email = e.target.email.value;
    const password = e.target.password.value;

    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
    /* clear input feild */
    e.target.email.value = "";
    e.target.password.value = "";

    if (user) {
      toast.success("Login Successfull");
    }
    console.log(user);
    if (error) {
      toast.error("invalid password or email !");
    }
  };
  /* reset password */
  const [currentEmail, setCurrentEmail] = useState("");
  const handelEmailBlur = (e) => {
    setCurrentEmail(e.target.value);
  };
  let navigate = useNavigate();
  let location = useLocation();
  const [currentUser] = useAuthState(auth);
  let from = location.state?.from?.pathname || "/";
  if (currentUser) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="block p-6 mx-auto my-8 rounded-lg shadow-lg bg-white max-w-sm">
        <img
          className="mx-auto my-1"
          style={{ height: "50px" }}
          src={logo}
          alt=""
        />
        <h2 className="text-3xl mb-2 font-sans font-semibold text-rose-600">
          Login
        </h2>
        <form onSubmit={handelLogin}>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail2"
              onBlur={handelEmailBlur}
              aria-describedby="emailHelp"
              required
              name="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword2"
              required
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-end items-center mb-6">
            <span
              onClick={() => {
                sendPasswordResetEmail(currentEmail);
                toast.success("Reset Email send");
              }}
              className="text-blue-600 cursor-pointer hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Forgot password?
            </span>
          </div>
          <p className="text-red-600">{error?.message}</p>
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-rose-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-rose-700 hover:shadow-lg
      focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-rose-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Login
          </button>
          <p className="text-gray-800 mt-6 text-center">
            Not a member?{" "}
            <Link
              to="/signUp"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Create new account
            </Link>
          </p>
          <Toaster />
          <div className="flex items-center w-4/6 mx-auto">
            <div
              style={{ height: "1px", width: "100%" }}
              className="bg-gray-700"
            ></div>
            <p className="mx-3">or</p>
            <div
              style={{ height: "1px", width: "100%" }}
              className="bg-gray-700"
            ></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
