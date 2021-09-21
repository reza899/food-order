import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

const mealAxios = axios.create({
  baseURL: process.env.REACT_APP_THEMEALDB_URL,
});

//Interceptors Response Config
mealAxios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  expectedError && toast(error.response.data.error);

  if (!expectedError) {
    toast.error("An error has occured! in MealAPI");
  }

  return Promise.reject(error);
});

const responseBody = (response: AxiosResponse) => response;

//General Requests
export const request = {
  get: <T>(url: string) => mealAxios.get<T>(url).then(responseBody),
};

//search
export const searchMealByName = (param: string) =>
  request.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + param);
// export const searchMealByLetter = (param: string) =>
// //   request.get("https://www.themealdb.com/api/json/v1/1/search.php?f=" + param);
// export const searchMealById = (param: string) =>
//   request.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + param);
//random
export const randomMeal = () =>
  request.get("https://www.themealdb.com/api/json/v1/1/random.php");
//categories
export const listMealByCategories = () =>
  request.get("https://www.themealdb.com/api/json/v1/1/categories.php");
//list
export const listAllCategories = () =>
  request.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
// export const listAllArea = () =>
//   request.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
//filter
export const filterByCategory = (param: string) =>
  request.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + param);
export const filterByArea = (param: string) =>
  request.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + param);

export default request;
