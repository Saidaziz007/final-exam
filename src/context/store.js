import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/index";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlistSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
