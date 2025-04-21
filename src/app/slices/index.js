import {combineReducers} from '@reduxjs/toolkit';
import ProductReducer from './productSlice';
import CategoryReducer from './categorySlice';

export const rootReducer = combineReducers({
  product: ProductReducer,
  category: CategoryReducer,
});
