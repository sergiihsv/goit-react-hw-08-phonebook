import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter';
import { authSlice, persistedToken } from './authSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { phoneBookApi } from './phoneBookRTK';

export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
    [authSlice.name]: persistedToken,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    phoneBookApi.middleware,
  ],
});

export const persistor = persistStore(store);
