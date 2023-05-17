import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  email: string | null;
  token: string | null;
  id: string | null;
}

const initialState: UserState = {
  email: null,
  token: 'testToken',
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.token = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
