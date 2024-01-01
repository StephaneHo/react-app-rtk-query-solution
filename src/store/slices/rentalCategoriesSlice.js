import { configureStore, createSlice } from "@reduxjs/toolkit";

export const rentalCategoriesSlice = createSlice({
  name: "rentalCategory",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addRentalCategory(state, action) {
      state.push(action.payload);
    },
    removeRentalCategory(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: { rentalCategories: rentalCategoriesSlice.reducer },
});
export { store };
export const { addRentalCategory, removeRentalCategory } =
  rentalCategoriesSlice.actions;
