import trendyfashApi from "@/apis";
import {  configureStore } from "@reduxjs/toolkit";
// import authReducer from "./authSlice";

// const appReducer = combineReducers({
//   auth: authReducer,
// });

const store = configureStore({
  reducer: {
    [trendyfashApi.reducerPath]: trendyfashApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trendyfashApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
