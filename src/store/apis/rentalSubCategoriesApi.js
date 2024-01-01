import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// WARNING you have to import from "@reduxjs/toolkit/query/react NOT from @reduxjs/toolkit/query/

const rentalSubCategoriesApi = createApi({
  reducerPath: "rentalSubCategories",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      addRentalSubCategory: builder.mutation({
        invalidatesTags: (
          result,
          error,
          { rentalCategoryId, rentalSubCategoryName }
        ) => {
          return [{ type: "RentalSubCategory", id: rentalCategoryId }];
        },
        query: ({ rentalCategoryId, rentalSubCategoryName }) => {
          console.log("rentalSubCategoryName", rentalSubCategoryName);
          return {
            url: "/rentalSubCategories",
            method: "POST",
            body: {
              categoryId: rentalCategoryId,
              name: rentalSubCategoryName,
            },
          };
        },
      }),
      fetchRentalSubCategories: builder.query({
        providesTags: (result, error, category) => {
          return [{ type: "RentalSubCategory", id: category.id }];
        },
        query: (rentalCategory) => {
          return {
            url: "/rentalSubCategories",
            params: {
              categoryId: rentalCategory.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchRentalSubCategoriesQuery,
  useAddRentalSubCategoryMutation,
} = rentalSubCategoriesApi;
export { rentalSubCategoriesApi };
