import { AppApi } from "./AppApi";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {
    [AppApi.reducerPath]: AppApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AppApi.middleware),
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
