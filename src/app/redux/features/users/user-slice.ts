import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../../types/user';

type State = {
  users: User[];
};

const initialState: State = {
  users: [],
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});
