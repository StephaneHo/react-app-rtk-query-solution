import { configureStore } from "@reduxjs/toolkit";

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

window.store = store;

export {
  useFetchRentalSubCategoriesQuery,
  useAddRentalSubCategoryMutation,
  useDeleteRentalSubCategoryMutation,
} from "./apis/rentalSubCategoriesApi";
export {
  useFetchRentalCategoriesQuery,
  useAddRentalCategoryMutation,
  useDeleteRentalCategoryMutation,
} from "./apis/rentalCategoriesApi";
