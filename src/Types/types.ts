import { z } from "zod";
import { contactAdminSchema } from "./zodSchema";

export type ContactAdminResquestProp = z.infer<typeof contactAdminSchema>;

export interface plainApiResponseProps {
  status: number;
  msg: string;
}
