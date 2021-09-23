import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: { auth: authSlice },
});

type RootState = ReturnType<typeof store.getState>;

export const selectIsLoggedin = (state:RootState) => state.auth.isLoggedIn;

export default store;
