import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../service/authApi";
import { foodApi } from "../service/mealApi";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    [foodApi.reducerPath]: foodApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([foodApi.middleware, authApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export const selectIsLoggedin = (state: RootState) => state.auth.isLoggedIn;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotalAmount = (state: RootState) =>
  state.cart.totalAmount;

export default store;
