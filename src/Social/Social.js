import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import auth from "../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Social = () => {
  /* all provider */
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  return (
    <div>
      <div className="flex justify-center text-2xl items-center mt-3 ">
        <BsFacebook
          onClick={() => signInWithFacebook()}
          className="mx-3 text-blue-600 cursor-pointer"
        ></BsFacebook>
        <FcGoogle
          onClick={() => signInWithGoogle()}
          className="mx-3 text-3xl cursor-pointer"
        ></FcGoogle>
        <FaGithub
          onClick={() => signInWithGithub()}
          className="mx-3 cursor-pointer"
        ></FaGithub>
      </div>
    </div>
  );
};

export default Social;
