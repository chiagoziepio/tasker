import BackBtn from "@/component/BackBtn";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <main className="flex flex-col gap-4">
      <BackBtn>
        <div className="w-fit h-fit flex items-center gap-1 cursor-pointer">
          <IoIosArrowBack />
          <span>Back</span>
        </div>
      </BackBtn>
      <ContactForm />
    </main>
  );
};

export default Contact;
