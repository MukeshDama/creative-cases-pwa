import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    industries: [],
    categories: [],
    status: "idle",
  },
  reducers: {},
});

export default filtersSlice.reducer;
