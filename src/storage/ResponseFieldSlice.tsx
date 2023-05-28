import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ResponseState {
  value: string;
  error: string;
}

const initialState: ResponseState = {
  value: '',
  error: '',
};

export const responseSlice = createSlice({
  name: 'response',
  initialState,
  reducers: {
    setResponseValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setErrorValue: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setResponseValue, setErrorValue } = responseSlice.actions;
export default responseSlice.reducer;
