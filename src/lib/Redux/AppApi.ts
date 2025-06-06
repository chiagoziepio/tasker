import { BASE_URL } from "@/Constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AppApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: () => ({}),
});
