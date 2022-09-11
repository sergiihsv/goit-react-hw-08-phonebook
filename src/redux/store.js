import { configureStore } from '@reduxjs/toolkit';
import { phoneBookApi } from './contacts';
import { filterSlice } from './filter';

export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    phoneBookApi.middleware,
  ],
});
