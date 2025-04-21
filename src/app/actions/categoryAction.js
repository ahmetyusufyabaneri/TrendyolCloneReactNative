import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../services/requests';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async params => {
    const response = await getRequest('/products/categories', params);
    return response.data;
  },
);
