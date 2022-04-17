import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { picture, name, balance, _id, about } = service;
  return (
    <div className="mx-auto">
      <div className="max-w-sm rounded-md shadow-md dark:bg-coolGray-900 dark:text-coolGray-100">
        <img
          src={picture}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-coolGray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="dark:text-coolGray-100">{about.slice(0, 200)}</p>
            <p className="text-xl font-semibold">$ {balance}</p>
          </div>
          <Link
            to={"/checkOut/" + _id}
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
