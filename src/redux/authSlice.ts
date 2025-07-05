import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    kind: "UNAUTHORIZED",
  },
  isLogoutClick: false,
};


export const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers:{

    }
})

export default authSlice.reducer;