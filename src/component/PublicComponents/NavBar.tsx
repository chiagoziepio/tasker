import { buttonVariants } from "@/components/ui/button";
import { NavItem } from "@/lib/Data";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex gap-4 items-center">
      {NavItem.map((item) => (
        <Link
          key={item.title}
          href={item.link}
          className={`${
            item.title === "Login" && buttonVariants({ variant: "outline" })
          } ${
            item.title === "Contact" && buttonVariants({ variant: "default" })
          }`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
