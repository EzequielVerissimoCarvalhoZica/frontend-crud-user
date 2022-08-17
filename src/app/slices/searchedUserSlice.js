import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  reload: false,
};

export const searchedUserSlice = createSlice({
  name: 'searchedUser',
  initialState,
  reducers: {
    insertSearch: (state, action) => {
      state.search = action.payload
    },
    reload: (state) => {
      state.reload = !state.reload
    }
  },
})

// Action creators are generated for each case reducer function
export const { insertSearch, reload } = searchedUserSlice.actions

export default searchedUserSlice.reducer