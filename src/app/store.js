import { configureStore } from '@reduxjs/toolkit'
import searchedUserReducer from './slices/searchedUserSlice'

export const store = configureStore({
  reducer: {
    searchedUser: searchedUserReducer,
  },
})