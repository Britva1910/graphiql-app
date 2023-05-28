import { configureStore } from '@reduxjs/toolkit';
import editorReducer from './EditorFieldSlice';
import responseReducer from './ResponseFieldSlice';
import userReducer from './UserSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    editor: editorReducer,
    response: responseReducer,
    user: userReducer,
  },
});
export default store;
