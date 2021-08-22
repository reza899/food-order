import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

//Base URL Config
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

//Interceptors Request Config
axios.interceptors.request.use((config) => {
  config.headers["X-Parse-REST-API-Key"] = process.env.REACT_APP_API_Key;
  config.headers["X-Parse-Application-Id"] = process.env.REACT_APP_APP_ID;
  return config;
}, undefined);

//Interceptors Response Config
axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  expectedError && toast(error.response.data.error);

  if (!expectedError) {
    toast.error("An error has occured!");
  }


  return Promise.reject(error);
});

const responseBody = (response: AxiosResponse) => response.data;

//General Requests
export const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, data?: {}) =>
    axios.post<T>(url, data).then(responseBody),
};

export default request;
