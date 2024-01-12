import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../../../types/user';
import { initialUsers as users } from '../../data/initialUsers';

type State = {
  users: UserType[];
};

const initialState: State = {
  users,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});
