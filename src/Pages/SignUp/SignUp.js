import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import toast, { Toaster } from "react-hot-toast";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import logo from "../../images/logo.png";
import Social from "../../Social/Social";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [customError, setCustomError] = useState("");
  const handelSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const agree = e.target.checkBox.checked;
    const confirmPassword = e.target.confirmPassword.value;

    /* create a user with email and password */
    if (agree) {
      if (password === confirmPassword) {
        createUserWithEmailAndPassword(email, password);
        setCustomError("");
        toast.success("user Successfully created!");
        /* clear input feild */
        e.target.email.value = "";
        e.target.password.value = "";
        e.target.checkBox.checked = false;
        e.target.confirmPassword.value = "";
      } else {
        setCustomError("Two password are not same !");
        toast.error("Two password are not same !");
      }
    } else {
      setCustomError("please accept trams and conditions");
      toast.error("accpet trams conditions");
    }
  };

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
          Sign Up
        </h2>
        <form onSubmit={handelSignUp}>
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
              name="email"
              aria-describedby="emailHelp"
              required
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
              name="password"
              required
              placeholder="Password"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Confirm Password
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
              id="exampleInputPassword3"
              name="confirmPassword"
              required
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex justify-start items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
                name="checkBox"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="exampleCheck2"
              >
                Accept all trams $ conditions
              </label>
            </div>
          </div>
          <p className="text-red-600">{error?.message || customError}</p>
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
            Sign in
          </button>
          <p className="text-gray-800 mt-6 text-center">
            Not a member?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Login
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
        <Social></Social>
      </div>
    </div>
  );
};

export default SignUp;
