import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  errorMessage: '',
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    changeError: (state, action) => {
      state.errorMessage = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeError } = errorSlice.actions

export default errorSlice.reducer