import { configureStore } from '@reduxjs/toolkit';
import editorReducer from './EditorFieldSlice';
import responseReducer from './ResponseFieldSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    editor: editorReducer,
    response: responseReducer,
  },
});
export default store;
