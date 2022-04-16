import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Login = () => {
  return (
    <div>
      <div class="block p-6 mx-auto my-8 rounded-lg shadow-lg bg-white max-w-sm">
        <img
          className="mx-auto my-1"
          style={{ height: "50px" }}
          src={logo}
          alt=""
        />
        <h2 className="text-3xl mb-2 font-sans font-semibold text-rose-600">
          Login
        </h2>
        <form>
          <div class="form-group mb-6">
            <label
              for="exampleInputEmail2"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              class="form-control
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
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group mb-6">
            <label
              for="exampleInputPassword2"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              class="form-control block
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
              placeholder="Password"
            />
          </div>
          <div class="flex justify-between items-center mb-6">
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="exampleCheck2"
              >
                Remember me
              </label>
            </div>
            <span class="text-blue-600 cursor-pointer hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">
              Forgot password?
            </span>
          </div>
          <button
            type="submit"
            class="
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
          <p class="text-gray-800 mt-6 text-center">
            Not a member?{" "}
            <Link
              to="/signUp"
              class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Create new account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
