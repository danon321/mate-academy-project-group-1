import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPostsByCategory } from '../../../../api/services/fetchPost';
import { Post } from '../../../../types/post';

type State = {
  isLoading: boolean;
  error: boolean;
  posts: Post[];
};

const initialState: State = {
  isLoading: true,
  error: false,
  posts: [],
};

export const postsByCategory = createSlice({
  name: 'postsByCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPostsByCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchPostsByCategory.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchPostsByCategory.rejected, (state) => {
      state.error = true;
    });
  },
});
