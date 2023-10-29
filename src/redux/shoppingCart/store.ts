import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "./features/cartSlice";
export const store = configureStore({ reducer: { amount: amountReducer } });

export type RootState = ReturnType<typeof store.getState>
export type SneakerDispatch = typeof store.dispatch