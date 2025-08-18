import { Authentication, AuthenticationState } from "@/models/redux.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthenticationState = {
  value: {
    kind: "UNAUTHORIZED",
  },
  isLogoutClick: false,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    hydrate: (_state, action) => {
      return action.payload;
    },
    authenticate: (
      state,
      action: PayloadAction<{ payload: Authentication }>
    ) => {
      state.value = {
        kind: "AUTHORIZED",
        payload: action.payload.payload,
      };
    },
    logout: (state) => {
      state.value = {
        kind: "UNAUTHORIZED",
      };
    },
  },
});

export const { authenticate, hydrate, logout } = authSlice.actions;

export default authSlice.reducer;
