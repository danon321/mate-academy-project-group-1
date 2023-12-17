import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from '../features/posts/post-slice';

const GETPOST = 'getPost';
const ADD_LIKE = 'addLike';
const ADD_DISLIKE = 'addDislike';

export const actions = {
  getPost: (id: string) => ({ type: GETPOST, id }),
  addLike: (id: string) => ({ type: ADD_LIKE, id }),
  addDislike: (id: string) => ({ type: ADD_DISLIKE, id }),
};

const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
