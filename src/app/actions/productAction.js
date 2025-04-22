import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../services/requests';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async params => {
    const URL = params ? `/products/category/${params}` : '/products';
    const response = await getRequest(URL, params);
    return response.data;
  },
);

export const getProductDetail = createAsyncThunk(
  'products/getProductDetail',
  async params => {
    const URL = `/products/${params}`;
    const response = await getRequest(URL, params);
    return response.data;
  },
);
