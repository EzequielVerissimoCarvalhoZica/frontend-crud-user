import { createSlice } from '@reduxjs/toolkit';
/* eslint no-param-reassign: ["error", { "props": false }] */

const initialState = {
  search: '',
  reload: false,
  showUser: false,
  user: {},
  showEdit: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserSearched: (state, action) => {
      state.search = action.payload;
    },
    showUserDetail: (state) => {
      state.showUser = !state.showUser;
    },
    showUserEdit: (state) => {
      state.showEdit = !state.showEdit;
    },
    setReload: (state) => {
      state.reload = !state.reload;
    },
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  setUserSearched, setReload, showUserDetail, showUserEdit, setCurrentUser,
} = userSlice.actions;

export default userSlice.reducer;
