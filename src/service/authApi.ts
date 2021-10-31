import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../model/auth";
import { RootState } from "../store/store";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://parseapi.back4app.com/",
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
  }),
});

export const { useLoginMutation } = authApi;
