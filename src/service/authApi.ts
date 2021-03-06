import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RegisterForm, User } from "../model/auth";
import { RootState } from "../store/store";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.user?.sessionToken;
      if (token) {
        headers.set("sessionToken", token);
      }
      headers.set(
        "X-Parse-Application-Id",
        "Fv8yy3ydChG0bQNfCW08n4cRZle5aqMQoc6xMd5R"
      );
      headers.set(
        "X-Parse-REST-API-Key",
        "7vRdIduB8QhcHQtNB9ITDG0EVHMuyFyL4C2e2We1"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<User, string>({
      query: (cred) => ({
        url: `Login?${cred}`,
        headers: {
          "X-Parse-Revocable-Session": "1",
        },
      }),
    }),
    register: builder.mutation<User, RegisterForm>({
      query: (cred) => ({
        url: `/classes/_User`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Parse-Revocable-Session": "1",
        },
        body: cred,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
