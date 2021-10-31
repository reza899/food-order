import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../model/auth";

interface AuthSliceState {
  isLoggedIn: boolean;
  user?: User | null;
}

const initialState: AuthSliceState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLoggedIn: (
      state,
      {
        payload: { objectId, sessionToken, username, email },
      }: PayloadAction<User>
    ) => {
      state.isLoggedIn = true;
      const user: User = {
        objectId,
        sessionToken,
        username,
        email,
      };
      state.user = user;
    },
    onLoggedOut: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { onLoggedIn, onLoggedOut } = authSlice.actions;

export default authSlice.reducer;
