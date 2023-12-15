import { createSlice } from '@reduxjs/toolkit';
import { content2, title2 } from '../../contents/content';
import { PostType } from '../../types/post';

type State = {
  posts: PostType[];
};

const initialState: State = {
  posts: [
    {
      id: '1',
      title: 'Title 1',
      content: 'Content 1',
      likes: 4,
      dislikes: 1,
      date: '2023-12-13  time: 15:00',
    },
    {
      id: '2',
      title: title2,
      content: content2,
      likes: 2,
      dislikes: 7,
      date: '2023-12-13  time: 14:00',
    },
    {
      id: '3',
      title: 'Title 3',
      content: 'Content 3',
      likes: 3,
      dislikes: 3,
      date: '2023-12-12  time: 12:12',
    },
  ],
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});
