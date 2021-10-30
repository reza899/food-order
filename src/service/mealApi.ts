import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  APIArea,
  APICategory,
  APIMeal,
  APIMealsArea,
  APIMealsCategory,
} from "../model/api-meals";

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
    randomMeal: builder.query<APIMeal, void>({
      query: () => `random.php`,
    }),
    listMealByCategories: builder.query<APICategory[], void>({
      query: () => `categories.php`,
      transformResponse: (response) => (response as any).categories,
    }),
    listAllArea: builder.query<APIArea[], void>({
      query: () => `list.php?a=list`,
      transformResponse: (response) => (response as any).meals,
    }),
    filterByCategory: builder.query<APIMealsCategory[], string>({
      query: (cat) => `filter.php?c=${cat}`,
      transformResponse: (response) => (response as any).meals,
    }),
    filterByArea: builder.query<APIMealsArea[], string>({
      query: (area) => `filter.php?a=${area}`,
      transformResponse: (response) => (response as any).meals,
    }),
  }),
});

export const {
  useSearchMealByNameQuery,
  useRandomMealQuery,
  useListMealByCategoriesQuery,
  useListAllAreaQuery,
  useFilterByCategoryQuery,
  useFilterByAreaQuery,
} = foodApi;
