import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div>
      <div className="flex justify-center text-2xl items-center mt-3 ">
        <BsFacebook className="mx-3 text-blue-600 cursor-pointer"></BsFacebook>
        <FcGoogle className="mx-3 text-3xl cursor-pointer"></FcGoogle>
        <FaGithub className="mx-3 cursor-pointer"></FaGithub>
      </div>
    </div>
  );
};

export default Social;
