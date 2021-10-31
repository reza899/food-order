import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authApi } from "../service/authApi";
import { foodApi } from "../service/foodApi";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [foodApi.reducerPath,authApi.reducerPath],
};

const reducers = {
  auth: authSlice,
  cart: cartSlice,
  [foodApi.reducerPath]: foodApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
};
const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([foodApi.middleware, authApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export const selectIsLoggedin = (state: RootState) => state.auth.isLoggedIn;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotalAmount = (state: RootState) =>
  state.cart.totalAmount;

export default store;
