import { createSlice } from "@reduxjs/toolkit";

const clientsSlice = createSlice({
  name: "clients",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
});

export default clientsSlice.reducer;
