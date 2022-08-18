import { createSlice } from '@reduxjs/toolkit';
/* eslint no-param-reassign: ["error", { "props": false }] */
const initialState = {
  errorMessage: '',
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    changeError: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { changeError } = errorSlice.actions;

export default errorSlice.reducer;
