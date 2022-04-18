import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ImHappy2 } from "react-icons/im";
import { GoVerified } from "react-icons/go";
import { ServiceContext } from "../../App";

const CheckOut = () => {
  const services = useContext(ServiceContext);
  const [current, setCurrent] = useState([]);
  const { checkOutId } = useParams();
  useEffect(() => {
    const selectedService = services.find(
      (service) => service._id === checkOutId
    );

    setCurrent(selectedService);
  }, [checkOutId]);
  // const { name, balance, picture, about } = current;

  return (
    <div>
      <section className="bg-gray-100  lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white  lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2">
            <div
              className="h-64 bg-cover lg:rounded-lg lg:h-full"
              style={{
                backgroundImage: `url(${current?.picture})`,
              }}
            ></div>
          </div>

          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-900 md:text-3xl">
              {current?.name}{" "}
            </h2>
            <p className="mt-4 text-gray-600 text-slate-900-400">
              {current?.about}
            </p>

            <div className="mt-8">
              <Link
                to={"/checkOut/" + checkOutId + "/#fromContainer"}
                className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700"
              >
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* check out from */}
      <section
        id="fromContainer"
        className="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-white mt-8"
      >
        <h2 className="text-3xl font-semibold text-center text-white dark:text-black">
          Get in touch
        </h2>
        <p className="mt-3 text-center text-gray-800 dark:text-gray-400">
          fill this from. for presage my service
        </p>

        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
          <Link
            to="/"
            className="flex flex-col items-center px-4 py-3 text-gray-800 transition-colors duration-200 transform rounded-md dark:text-black hover:bg-blue-200 dark:hover:bg-blue-500"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>

            <span className="mt-2">dhaka,121 Street, NY</span>
          </Link>

          <Link
            to="/"
            className="flex flex-col items-center px-4 py-3 text-gray-800 transition-colors duration-200 transform rounded-md dark:text-black hover:bg-blue-200 dark:hover:bg-blue-500"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>

            <span className="mt-2">+2499999666600</span>
          </Link>

          <Link
            to="/"
            className="flex flex-col items-center px-4 py-3 text-gray-800 transition-colors duration-200 transform rounded-md dark:text-black hover:bg-blue-200 dark:hover:bg-blue-500"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>

            <span className="mt-2">innovativefitness@gmail.com</span>
          </Link>
        </div>

        <form className="mt-6 ">
          <div className="items-center -mx-2 md:flex">
            <div className="w-full mx-2">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-black">
                Name
              </label>

              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-300 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
                required
              />
            </div>

            <div className="w-full mx-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-black">
                E-mail
              </label>

              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-300 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="email"
                required
              />
            </div>
          </div>

          <div className="w-full mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-black">
              Message
            </label>

            <textarea
              className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-300 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              required
            ></textarea>
          </div>

          <div className="flex justify-center mt-6">
            <input
              onClick={(e) => {
                e.preventDefault();
              }}
              type="submit"
              className=" cursor-pointer inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalSm"
              value="Check out"
            />
          </div>
        </form>
      </section>
      {/*  modal section */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalSm"
        tabindex="-1"
        aria-labelledby="exampleModalSmLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-sm relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className=" modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <div>
                <GoVerified className="text-4xl text-green-500 mx-auto my-4"></GoVerified>

                <h5
                  className="text-2xl flex mx-auto justify-center items-center  font-medium leading-normal text-green-600"
                  id="exampleModalSmLabel"
                >
                  Congratulations !! <ImHappy2 />
                </h5>
                <small className="text-gray-400">
                  Now you are a member of Innovative fitness Gym center
                </small>
              </div>
            </div>
            <div
              data-bs-dismiss="modal"
              className="modal-body  relative cursor-pointer p-4 bg-green-600 text-xl font-semibold text-white"
            >
              Ok
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
