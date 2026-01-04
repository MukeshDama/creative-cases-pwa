import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Client } from "../types";

type ClientsState = {
  items: Client[];
  status: "idle" | "loading" | "success" | "error";
};

const initialState: ClientsState = {
  items: [],
  status: "idle",
};

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    fetchClientsStart(state) {
      state.status = "loading";
    },
    fetchClientsSuccess(state, action: PayloadAction<Client[]>) {
      state.status = "success";
      state.items = action.payload;
    },
    fetchClientsError(state) {
      state.status = "error";
    },
  },
});

export const {
  fetchClientsStart,
  fetchClientsSuccess,
  fetchClientsError,
} = clientsSlice.actions;

export default clientsSlice.reducer;
