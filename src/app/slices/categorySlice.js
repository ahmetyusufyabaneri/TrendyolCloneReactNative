import {createSlice} from '@reduxjs/toolkit';
import {getCategories} from '../actions/categoryAction';

const initialState = {
  categories: {},
  selectedCategory: '',
  isLoading: false,
  isError: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isError = action.error.message;
      });
  },
});

export const {setSelectedCategory} = categorySlice.actions;

export default categorySlice.reducer;
