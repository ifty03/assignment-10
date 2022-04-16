import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  console.log(service);
  const { picture, name, balance } = service;
  return (
    <div className="mx-auto">
      <div className="max-w-xs rounded-md shadow-md dark:bg-coolGray-900 dark:text-coolGray-100">
        <img
          src={picture}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-coolGray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              Donec lectus leo
            </h2>
            <p className="dark:text-coolGray-100">
              Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
            </p>
            <p className="text-xl font-semibold">$ {balance}</p>
          </div>
          <Link
            to="/checkOut"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-rose-500 hover:bg-rose-600 text-white dark:text-coolGray-900"
          >
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
