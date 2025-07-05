import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const trendyfashApi = createApi({
  reducerPath: "trendyfashApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    // prepareHeaders: (headers, { getState }) => {
    //   const state = (getState() as RootState).persistedReducer;
    //   const { extendedEmployeesFlag, selectedRole, globalFilters } =
    //     state.accessControl.value;
    //   headers.set("Access-Control-Allow-Origin", "*");
    //   headers.set("selectedrole", selectedRole);
    //   if (!headers.has("extendedemployees")) {
    //     headers.set("extendedemployees", `${extendedEmployeesFlag}`);
    //   }
    //   headers.set("filters", globalFilters);
    //   return headers;
    // },
    credentials: "include",
  }),
  tagTypes: [],
  keepUnusedDataFor: 60 * 60,
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});


export default trendyfashApi;
