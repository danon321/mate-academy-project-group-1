import { createSlice } from '@reduxjs/toolkit';
import { PostType, fullDate } from '../../types/post';

type State = {
  posts: PostType[];
};

const initialState: State = {
  posts: [
    {
      id: '1',
      title: 'Title 1',
      content: 'Content 3',
      likes: 4,
      dislikes: 1,
      date: fullDate(),
    },
    {
      id: '2',
      title: 'Title 2',
      content: 'Content 2',
      likes: 2,
      dislikes: 7,
      date: fullDate(),
    },
    {
      id: '3',
      title: 'Title 3',
      content: 'Content 3',
      likes: 3,
      dislikes: 3,
      date: fullDate(),
    },
  ],
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // getPost: (state: any, action: any) => {
    //   return state.posts.find((post: PostType) => post.id === action.payload.id);
    // },
  },
});

// export const selectPosts = (state: any) => state.posts;

// export const getUserPosts = (state: any, postId: any) =>
//   createSelector(
//     selectPosts,
//     state => state.posts.filter((post: any) => post.id === postId)
//   );
