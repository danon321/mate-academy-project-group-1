import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Category } from '../../../../types/category';
import { fetchCategories } from '../../../../api/services/fetchPost';

type State = {
  isLoading: boolean;
  error: boolean;
  categories: Category[];
};

const initialState: State = {
  isLoading: true,
  error: false,
  categories: [],
};

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchCategories.fulfilled,
      (state, action: PayloadAction<Category[]>) => {
        state.categories = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchCategories.rejected, (state) => {
      state.error = true;
    });
  },
});
