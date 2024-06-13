import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bannerData: [],
  imageURL:""
}

export const vidioSlice = createSlice({
  name: 'vidio',
  initialState,
  reducers: {
    setBannerData: (state, action) => {
        state.bannerData = action.payload
      },
      setImageURL: (state, action) => {
        state.imageURL = action.payload
      },
  }
})

// Action creators are generated for each case reducer function
export const { setBannerData, setImageURL } = vidioSlice.actions

export default vidioSlice.reducer