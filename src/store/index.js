import { configureStore } from "@reduxjs/toolkit";
import { rentalCategoriesSlice } from "./slices/rentalCategoriesSlice";
import { rentalSubCategoriesApi } from "./apis/rentalSubCategoriesApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rentalCategoriesApi } from "./apis/rentalCategoriesApi";

export const store = configureStore({
  reducer: {
    [rentalCategoriesApi.reducerPath]: rentalCategoriesApi.reducer,
    [rentalSubCategoriesApi.reducerPath]: rentalSubCategoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(rentalCategoriesApi.middleware)
      .concat(rentalSubCategoriesApi.middleware);
  },
});

setupListeners(store.dispatch);

export const { addRentalCategory, removeRentalCategory } =
  rentalCategoriesSlice.actions;
export {
  useFetchRentalSubCategoriesQuery,
  useAddRentalSubCategoryMutation,
} from "./apis/rentalSubCategoriesApi";
export {
  useFetchRentalCategoriesQuery,
  useAddRentalCategoryMutation,
} from "./apis/rentalCategoriesApi";
