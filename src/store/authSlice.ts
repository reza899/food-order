import { createSlice } from "@reduxjs/toolkit";

interface AuthSliceState {
  isLoggedIn: boolean;
}

const initialState: AuthSliceState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    onLoggedOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { onLoggedIn, onLoggedOut } = authSlice.actions;

export default authSlice.reducer;
