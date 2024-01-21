import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Post } from '../../../../types/post';
import { fetchPosts } from '../../../../api/services/fetchPost';

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

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addLike: (state, action: PayloadAction<number>) => {
      state.posts.map((post) => {
        if (post.id === action.payload) {
          post.likes += 1;
        }
      });
    },
    addDislike: (state, action: PayloadAction<number>) => {
      state.posts.map((post) => {
        if (post.id === action.payload) {
          post.dislikes += 1;
        }
      });
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchPosts.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchPosts.rejected, (state) => {
      state.error = true;
    });
  },
});
