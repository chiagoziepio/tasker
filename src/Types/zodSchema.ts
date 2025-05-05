import { z } from "zod";

export const contactAdminSchema = z.object({
  email: z.string().email(),
  message: z
    .string({ message: "please include a message" })
    .trim()
    .min(10)
    .max(1000),
  name: z
    .string({ message: "name or company is required" })
    .trim()
    .min(3, { message: "name or company name canr be less than 3 character" })
    .max(50, {
      message: "name or company name can not be more than 50 character",
    }),
});

export const LoginSchema = z.object({
  staffId: z.string().trim().min(1, { message: "staff id is required" }),
  password: z.string().trim().min(8, { message: "password is required" }),
});

export const forgotPasswordSchema = z.object({
  staffid: z.string().trim().min(1, { message: "staff id is required" }),
});
