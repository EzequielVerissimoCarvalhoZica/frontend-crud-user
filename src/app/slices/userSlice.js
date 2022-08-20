import { createSlice } from '@reduxjs/toolkit';
/* eslint no-param-reassign: ["error", { "props": false }] */

const initialState = {
  user: {},
  search: '',
  reload: false,
  showDetail: false,
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
      state.showDetail = !state.showDetail;
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
