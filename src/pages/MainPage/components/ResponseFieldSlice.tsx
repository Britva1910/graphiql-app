import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export const responseSlice = createSlice({
  name: 'response',
  initialState: {
    value: '',
  },
  reducers: {
    setResponseValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setResponseValue } = responseSlice.actions;
export default responseSlice.reducer;
