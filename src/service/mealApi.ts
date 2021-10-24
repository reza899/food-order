import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIMeal } from "../model/api-meals";

export const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    searchMealByName: builder.query<APIMeal, string>({
      query: (name) => `search.php?s=${name}`,
      transformResponse: (response) => (response as any).meals[0],
    }),
  }),
});

export const { useSearchMealByNameQuery } = foodApi;
