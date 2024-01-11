import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// WARNING you have to import from "@reduxjs/toolkit/query/react NOT from @reduxjs/toolkit/query/

const rentalCategoriesApi = createApi({
  reducerPath: "rentalCategories",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      addRentalCategory: builder.mutation({
        invalidatesTags: ["RentalCategory"],
        query: (rentalCategoryName) => {
          return {
            url: "/rentalCategories",
            method: "POST",
            body: {
              name: rentalCategoryName,
            },
          };
        },
      }),
      fetchRentalCategories: builder.query({
        providesTags: ["RentalCategory"],
        query: () => {
          return {
            url: "/rentalCategories",
            method: "GET",
          };
        },
      }),
      deleteRentalCategory: builder.mutation({
        invalidatesTags: ["RentalCategory"],
        query: (rentalCategory) => {
          return {
            url: "/rentalCategories/" + rentalCategory.id,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchRentalCategoriesQuery,
  useAddRentalCategoryMutation,
  useDeleteRentalCategoryMutation,
} = rentalCategoriesApi;
export { rentalCategoriesApi };
