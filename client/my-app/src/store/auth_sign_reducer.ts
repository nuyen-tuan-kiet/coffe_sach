import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import { admin_infor } from '../share/type'
import { stat } from 'fs'

const   initialState:admin_infor = {
    admin_name: "dogy",
    admin_img: "dogy",
    admin_phone: "dogy",
    admin_adress:"dogy",
    isLogin: true,
    token:"",
    refesh_tk:"",
}

export const admin_info = createSlice({
    name: 'admin',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
      set_admin_infor :( state, action : PayloadAction<admin_infor>) =>{
         state.admin_adress = action.payload.admin_adress;
         state.isLogin = action.payload.isLogin;
         state.admin_name = action.payload.admin_name;
         state.admin_img = action.payload.admin_img;
         state.admin_phone = action.payload.admin_phone;
         state.token =action.payload.token;
         state.refesh_tk= action.payload.refesh_tk;
      } 
  }
})


export const { set_admin_infor}  = admin_info.actions;
export default admin_info.reducer



