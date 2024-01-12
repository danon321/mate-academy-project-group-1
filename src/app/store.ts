import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from './redux/features/posts/post-slice';
import { userSlice } from './redux/features/users/user-slice';

const GETPOST = 'getPost';
const ADD_LIKE = 'addLike';
const ADD_DISLIKE = 'addDislike';
const GETUSER = 'getUser';

export const actions = {
  getPost: (id: string) => ({ type: GETPOST, id }),
  addLike: (id: string) => ({ type: ADD_LIKE, id }),
  addDislike: (id: string) => ({ type: ADD_DISLIKE, id }),
  getUser: (id: string) => ({ type: GETUSER, id }),
};

const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
    users: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
