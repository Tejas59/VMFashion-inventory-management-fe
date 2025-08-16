import trendyfashApi from "@/apis";
import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
import authReducer from "./authSlice";
import productReducer from "./productSlice";
import { CombinedState } from "@reduxjs/toolkit/query/react";

const appReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

const rootReducer = (
  state:
    | CombinedState<{
        auth: any;
        product: any;
      }>
    | undefined,
  action: AnyAction
) => {
  // dispatch this action directly by matching the type here to reset store to its initial state
  if (action.type === "USER_LOGOUT") {
    storage.removeItem("persist:root");
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    [trendyfashApi.reducerPath]: trendyfashApi.reducer,
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trendyfashApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
