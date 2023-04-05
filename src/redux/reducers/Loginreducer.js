import { createSlice } from "@reduxjs/toolkit";
const loginreducer= createSlice({
  name: "Status",
  initialState:{checkStatus: false ,value:0,
  carddata:[],user:{}},
  reducers: {
    login: (state, action) => {
      state.checkStatus = action.payload;
    },
    increment:(state,action)=>{
      state.value=action.payload + 1  ;
    },
    decrement:(state,action)=>{
      state.value=action.payload - 1;
    },
    addcarddata:(state,action)=>{
    state.carddata.push(action.payload)
    },
    removecarddata:(state,action)=>{
      state.carddata.splice(action.payload,1)
    },
    userDetails:(state,action)=>{
      state.user=action.payload;
    }

  },
});
export const { login,  increment , decrement,addcarddata,removecarddata,userDetails } = loginreducer.actions;
export default loginreducer.reducer;
