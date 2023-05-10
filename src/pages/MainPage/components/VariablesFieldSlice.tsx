import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export const variablesSlice = createSlice({
  name: 'variables',
  initialState: {
    value: {}, //TODO add start value with variables
  },
  reducers: {
    setVariablesValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setVariablesValue } = variablesSlice.actions;
export default variablesSlice.reducer;
