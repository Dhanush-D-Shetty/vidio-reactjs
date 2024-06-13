import { configureStore } from '@reduxjs/toolkit'
import vidioReducer from './vidioSlice' 

export const store = configureStore({
  reducer: {
    vidioData:vidioReducer
  },
})