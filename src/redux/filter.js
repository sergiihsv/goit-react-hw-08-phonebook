import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    filterContacts(state, action) {
      state.value = action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
