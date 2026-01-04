import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    viewMode: "grid",
    theme: "light",
  },
  reducers: {},
});

export default uiSlice.reducer;
