import {combineReducers} from '@reduxjs/toolkit';
import ProductReducer from './productSlice';

export const rootReducer = combineReducers({
  product: ProductReducer,
});
