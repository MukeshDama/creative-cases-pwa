import { createSlice } from "@reduxjs/toolkit";

const casesSlice = createSlice({
  name: "cases",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
});

export default casesSlice.reducer;
