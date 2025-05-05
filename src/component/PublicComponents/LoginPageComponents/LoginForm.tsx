"use client";

import { Button } from "@/components/ui/button";
import { LoginSchema } from "@/Types/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = async (data) => {
    const validation = LoginSchema.safeParse(data);
    if (!validation.success) {
      toast.error(validation.error.message);
    }
    console.log(data);
    reset();
    toast.success("message sent successfully");
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row  max-w-screen-xl lg:max-w-full mx-auto lg:mx-0 lg:items-center">
      <div className="relative w-full lg:w-1/2">
        <Image
          src={"/loginImg.svg"}
          width={500}
          height={500}
          alt="contact-illustrator"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="flex flex-col gap-4 w-full lg:w-1/2"
      >
        <p>
          Please note, if you dont belong to any organization, you wont be able
          to login
        </p>
        <div className="flex gap-2 flex-col">
          <label htmlFor="staffId" className="flex gap-1 items-center">
            Staff ID
            <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            type="text"
            id="staffId"
            {...register("staffId")}
            className="h-[44px] border !outline-none p-1.5 rounded-[8px]"
            placeholder="staffId"
            required
          />
          {errors.staffId && (
            <span className="text-red-500 text-sm">
              {errors.staffId.message || "Staff ID is required"}
            </span>
          )}
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="password" className="flex gap-1 items-center">
            Password
            <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="h-[ 44px] border !outline-none p-1.5 rounded-[8px]"
            placeholder="password"
            required
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message || "password is required"}
            </span>
          )}
        </div>
        <Link href={"/forgot-password"}>Forgot password?</Link>
        <Button type="submit" className="cursor-pointer">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
