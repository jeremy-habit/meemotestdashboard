import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const oldindex = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof oldindex.dispatch;
export type RootState = ReturnType<typeof oldindex.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
