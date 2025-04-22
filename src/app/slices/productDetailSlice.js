import {createSlice} from '@reduxjs/toolkit';
import {getProductDetail} from '../actions/productAction';

const initialState = {
  product: {},
  isLoading: false,
  isError: false,
};

const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProductDetail.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.isError = action.error.message;
      });
  },
});

export default productDetailSlice.reducer;
