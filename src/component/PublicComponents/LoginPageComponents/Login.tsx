import BackBtn from "@/component/BackBtn";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <main className="flex flex-col gap-5">
      <BackBtn>
        <div className="w-fit h-fit flex items-center gap-1 cursor-pointer">
          <IoIosArrowBack />
          <span>Back</span>
        </div>
      </BackBtn>
      <LoginForm />
    </main>
  );
};

export default Login;
