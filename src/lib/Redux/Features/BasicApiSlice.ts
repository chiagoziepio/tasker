import { ContactAdminResquestProp, plainApiResponseProps } from "@/Types/types";
import { AppApi } from "../AppApi";

export const appiAppSlice = AppApi.injectEndpoints({
  endpoints: (builder) => ({
    contactAdmin: builder.mutation<
      plainApiResponseProps,
      ContactAdminResquestProp
    >({
      query: (body) => ({
        url: "/api/contactAdmin",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useContactAdminMutation } = appiAppSlice;
