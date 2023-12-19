import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PostType } from '../../../../types/post';
import { initialPosts as posts } from '../../data/initialPosts';

type State = {
  posts: PostType[];
};

const initialState: State = {
  posts,
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addLike: (state, action: PayloadAction<string>) => {
      state.posts.map((post) => {
        if (post.id === action.payload) {
          post.likes += 1;
        }
      });
    },
    addDislike: (state, action: PayloadAction<string>) => {
      state.posts.map((post) => {
        if (post.id === action.payload) {
          post.dislikes += 1;
        }
      });
    },
  },
});
