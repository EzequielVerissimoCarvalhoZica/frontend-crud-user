import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  reload: false,
  show: false,
  user: {},
  showEdit: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    insertSearch: (state, action) => {
      state.search = action.payload
    },
    showUserDetail: (state) => {
      state.show = !state.show
    },
    showUserEdit: (state) => {
      state.showEdit = !state.showEdit
    },
    reload: (state) => {
      state.reload = !state.reload
    },
    insertUser: (state, action) => {
      state.user = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { insertSearch, reload, showUserDetail, showUserEdit, insertUser } = userSlice.actions

export default userSlice.reducer