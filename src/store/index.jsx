import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart.slice";
import isLoadingSlice from "./slices/isLoading.slice";
import productsSlice from "./slices/products.slice";
import  puchesesSlice from "./slices/pucheses.slice";

export default configureStore({
  reducer: {
    products: productsSlice,
    isLoading: isLoadingSlice,
    pucheses: puchesesSlice,
    cart: cartSlice
  }
});