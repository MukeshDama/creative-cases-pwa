import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FilterOption } from "../types";

type FiltersState = {
  industries: FilterOption[];
  categories: FilterOption[];
  status: "idle" | "loading" | "success" | "error";
};

const initialState: FiltersState = {
  industries: [],
  categories: [],
  status: "idle",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    fetchFiltersStart(state) {
      state.status = "loading";
    },
    fetchFiltersSuccess(
      state,
      action: PayloadAction<{ industries: FilterOption[]; categories: FilterOption[] }>
    ) {
      state.status = "success";
      state.industries = action.payload.industries;
      state.categories = action.payload.categories;
    },
    fetchFiltersError(state) {
      state.status = "error";
    },
  },
});

export const {
  fetchFiltersStart,
  fetchFiltersSuccess,
  fetchFiltersError,
} = filtersSlice.actions;

export default filtersSlice.reducer;
