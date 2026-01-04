import { configureStore } from "@reduxjs/toolkit";
import casesReducer from "../features/cases/casesSlice";
import filtersReducer from "../features/filters/filtersSlice";
import clientsReducer from "../features/clients/clientsSlice";
import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    cases: casesReducer,
    filters: filtersReducer,
    clients: clientsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
