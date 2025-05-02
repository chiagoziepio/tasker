"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackBtn = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.back()} className="w-fit h-fit">
      {children}
    </div>
  );
};

export default BackBtn;
