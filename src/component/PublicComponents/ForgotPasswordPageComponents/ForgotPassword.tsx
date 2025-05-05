"use client";

import BackBtn from "@/component/BackBtn";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { forgotPasswordSchema } from "@/Types/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof forgotPasswordSchema>>({
    mode: "onChange",
    resolver: zodResolver(forgotPasswordSchema),
  });
  const onSubmit: SubmitHandler<z.infer<typeof forgotPasswordSchema>> = (
    data
  ) => {
    const validation = forgotPasswordSchema.safeParse(data);
    if (!validation.success) {
      toast.error(validation.error.message);
    }
    console.log(data);
    toast.success("check your email for a password reset link");
  };
  return (
    <main className="flex flex-col gap-5">
      <BackBtn>
        <div className="w-fit h-fit flex items-center gap-1 cursor-pointer">
          <IoIosArrowBack />
          <span>Back</span>
        </div>
      </BackBtn>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="w-full md:w-[400px] flex flex-col gap-4 mx-auto bg-white shadow-lg shadow-black p-1.5 h-fit rounded-[10px]"
      >
        <p className="text-xl text-center">Forgot Password?</p>
        <div className="flex flex-col gap-2">
          <label htmlFor="staffid" className="flex gap-1">
            Staff ID
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="staffId"
            {...register("staffid")}
            className="h-[44px] border !outline-none p-1.5 rounded-[8px]"
            placeholder="staffId"
            required
          />
          {errors.staffid && (
            <span className="text-red-500 text-sm">
              {errors.staffid.message || "Staff ID is required"}
            </span>
          )}
        </div>
        <Button type="submit" className="cursor-pointer">
          submit
        </Button>
      </form>
    </main>
  );
};

export default ForgotPassword;
