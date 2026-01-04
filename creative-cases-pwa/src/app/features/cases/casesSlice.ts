import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CaseItem } from "../types";

type CasesState = {
items: CaseItem[];
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
};

const initialState: CasesState = {
  items: [],
  status: "idle",
  error: null,
};

const casesSlice = createSlice({
  name: "cases",
  initialState,
  reducers: {
    fetchCasesStart(state) {
      state.status = "loading";
      state.error = null;
    },
    fetchCasesSuccess(state, action: PayloadAction<CaseItem[]>) {
      state.status = "success";
      state.items = action.payload;
    },
    fetchCasesError(state, action: PayloadAction<string>) {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const {
  fetchCasesStart,
  fetchCasesSuccess,
  fetchCasesError,
} = casesSlice.actions;

export default casesSlice.reducer;
