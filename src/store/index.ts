import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import attributes from './slices/attributes'
import skills from './slices/skills'
import perks from './slices/perks'

export const store = configureStore({
  reducer: {
    attributes,
    skills,
    perks,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store