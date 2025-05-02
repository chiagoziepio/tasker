import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row ">
      <div className="relative">
        <Image
          src={"/contact-illustrator.jpg"}
          width={500}
          height={500}
          alt="contact-illustrator"
        />
      </div>
    </div>
  );
};

export default ContactForm;
