import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filter/slice";
import cart from "./slices/cart/slice";

export const store = configureStore({
  reducer: {
    filterSlice,
    cart,
  },
});

export type RootState = ReturnType <typeof store.getState >

export type AppDispatch =typeof store.dispatch
export const useAppDispatch = ()=>useDispatch<AppDispatch>()