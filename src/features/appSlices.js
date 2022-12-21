import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  user:null,
  selectedImage:null
}

export const appSlices = createSlice({
  name: 'app',
  initialState,
  reducers: {
    login:(state,action)=>{
      state.user=action.payload
    },
    logout:(state,action)=>{
      state.user=null;
    },
    selectedImage:(state,action)=>{
      state.selectedImage=action.payload
    },
    resetImage:(state)=>{
      state.selectedImage=null;
    }

  },
})
export const {login, logout, selectedImage, resetImage}= appSlices.actions;
export const selectUser = (state)=> state.app.user;
export const selectSelectedImage = (state)=> state.app.selectedImage;
export default appSlices.reducer