import {combineReducers} from '@reduxjs/toolkit';
import ProductReducer from './productSlice';
import CategoryReducer from './categorySlice';
import ProductDetailReducer from './productDetailSlice';

export const rootReducer = combineReducers({
  product: ProductReducer,
  productDetail: ProductDetailReducer,
  category: CategoryReducer,
});
