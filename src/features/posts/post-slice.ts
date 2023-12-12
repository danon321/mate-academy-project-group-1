import { createSlice } from '@reduxjs/toolkit';
import { fullDate, PostType } from '../../types/Post';

type State = {
  posts: PostType[],
  
};

const initialState: State = {
  posts: [
    {
      id: 1,
      title: 'Title 1',
      description: 'Description 1',
      author: 'Author 1',
      date: fullDate(),
      imageUrl: '/static/images/posts/paella.jpg',
    },
    {
      id: 2,
      title: 'Title 2',
      description: 'Description 2',
      author: 'Author 2',
      date: fullDate(),
      imageUrl: '/static/images/posts/paella.jpg',
    },
    {
      id: 3,
      title: 'Title 3',
      description: 'Description 3',
      author: 'Author 3',
      date: fullDate(),
      imageUrl: '/static/images/posts/paella.jpg',
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
  }

});

// export const selectPosts = (state: any) => state.posts;

// export const getUserPosts = (state: any, postId: any) => 
//   createSelector(
//     selectPosts,
//     state => state.posts.filter((post: any) => post.id === postId)
//   );
