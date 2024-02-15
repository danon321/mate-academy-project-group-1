import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../types/post';
import { Category } from '../../types/category';

// const URL = 'http://localhost:5000';
const URL = 'https://blog-e6tl.onrender.com';

export const fetchPosts = createAsyncThunk('fetchPost', async () => {
  const data = await fetch(`${URL}/posts`);
  return (await data.json()) as Post[];
});

export const fetchCategories = createAsyncThunk('fetchCategory', async () => {
  const data = await fetch(`${URL}/categories`);
  return (await data.json()) as Category[];
});
