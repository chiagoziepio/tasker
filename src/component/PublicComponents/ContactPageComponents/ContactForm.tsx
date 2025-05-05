"use client";
import { Button } from "@/components/ui/button";
import { contactAdminSchema } from "@/Types/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof contactAdminSchema>>({
    mode: "onChange",
    resolver: zodResolver(contactAdminSchema),
  });
  const onSubmit: SubmitHandler<z.infer<typeof contactAdminSchema>> = async (
    data
  ) => {
    const validation = contactAdminSchema.safeParse(data);
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
          src={"/contact-illustrator.jpg"}
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
        <div className="flex gap-2 flex-col">
          <label htmlFor="name" className="flex gap-1 items-center">
            Fullname or Company name
            <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="h-[44px] border !outline-none p-1.5 rounded-[8px]"
            placeholder="fullname"
            required
          />
          {errors.name && (
            <span className="text-red-500 text-sm">
              {errors.name.message || "Name is required"}
            </span>
          )}
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="email" className="flex gap-1 items-center">
            Email
            <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="h-[44px] border !outline-none p-1.5 rounded-[8px]"
            placeholder="email"
            required
          />
          {errors.email && (
            <span className="text-red-500 text-sm">
              {errors.email.message || "email is required"}
            </span>
          )}
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="email" className="flex gap-1 items-center">
            Message
            <span className="text-red-500 text-sm">*</span>
          </label>

          <textarea
            {...register("message", { required: true })}
            id="message"
            required
            className="w-full h-36 overflow-y-auto !outline-none p-1.5 rounded-[8px] border"
            placeholder="leave a message"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message || "message is required"}
            </span>
          )}
        </div>
        <div>
          <Button className="cursor-pointer" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
