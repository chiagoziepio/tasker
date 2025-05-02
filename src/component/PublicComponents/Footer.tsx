import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white p-3">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              <Image
                src={"/taskerLogo.png"}
                alt="logo"
                width={65}
                height={65}
              />
            </Link>
            <a href="mailto:nduagubapio@gmail.com">
              <p className="text-base">nduagubapio@gmail.com</p>
            </a>
          </div>
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()}, All rights reserved.
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
