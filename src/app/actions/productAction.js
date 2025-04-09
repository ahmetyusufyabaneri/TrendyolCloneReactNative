import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../services/requests';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await getRequest('/products');
    return response.data;
  },
);
