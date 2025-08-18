import { UserData, UserLoginPayload } from "@/models/auth.interface";
import trendyfashApi from ".";

export const authApi = trendyfashApi.injectEndpoints({
  endpoints: (builder) => ({
    userRegistration: builder.mutation<
      void,
      { name: string; password: string; email: string }
    >({
      query: ({ name, password, email }) => ({
        url: "auth/register",
        body: { name, password, email },
        method: "POST",
      }),
    }),
    userLogin: builder.mutation<UserData, UserLoginPayload>({
      query: ({ email, password }) => ({
        url: "auth/login",
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const { useUserRegistrationMutation, useUserLoginMutation } = authApi;
