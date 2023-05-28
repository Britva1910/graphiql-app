import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface EditorState {
  value: string;
  variables: string;
}

const initialState: EditorState = {
  value: '',
  variables: '',
};
export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setEditorValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setVariablesValue: (state, action: PayloadAction<string>) => {
      state.variables = action.payload;
    },
  },
});

export const { setEditorValue, setVariablesValue } = editorSlice.actions;
export default editorSlice.reducer;
