import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../types/post';

const URL = 'https://blog-e6tl.onrender.com';

export const fetchPosts = createAsyncThunk('fetchPost', async () => {
  const data = await fetch(`${URL}/posts`);
  return (await data.json()) as Post[];
});
