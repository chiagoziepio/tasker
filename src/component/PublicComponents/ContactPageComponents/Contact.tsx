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
      <div className="w-[300px] h-[300px] bg-black p-1">
        <div
          style={{
            clipPath:
              "polygon(25% 20% , 85% 20%, 100% 40%, 100% 70%, 100% 80%, 85% 20%)",
          }}
          className="w-full h-full bg-white"
        ></div>
      </div>
    </main>
  );
};

export default Contact;
