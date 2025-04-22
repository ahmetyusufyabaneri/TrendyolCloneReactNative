import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from '../actions/productAction';

const initialState = {
  products: [],
  isLoading: false,
  isError: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isError = action.error.message;
      });
  },
});

export default productSlice.reducer;
