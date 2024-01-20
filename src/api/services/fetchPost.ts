import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../types/post';

export const fetchPost = createAsyncThunk('fetchPost', async () => {
  const data = await fetch('https://blog-e6tl.onrender.com/posts');
  return (await data.json()) as Post[];
});
