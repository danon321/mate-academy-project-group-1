import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from '../features/posts/post-slice';

const GETPOST = 'getPost';

export const actions = {
  getPost: (id: number) => ({ type: GETPOST, id }),
};

const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
