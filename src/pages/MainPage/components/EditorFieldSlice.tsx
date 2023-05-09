import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    value: '',
  },
  reducers: {
    setEditorValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setEditorValue } = editorSlice.actions;
export default editorSlice.reducer;
