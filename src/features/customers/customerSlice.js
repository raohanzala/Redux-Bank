import { createSlice } from "@reduxjs/toolkit";

const initialStateCustomer = {
  fullName : '',
  nationalID: '',
  createdAt : ''
}

const customerSlice = createSlice({
  name : 'customer',
  initialStateCustomer,
  reducers : {
    createCustomer: {

      prepare(fullName, nationalID){
return {
  payload : {fullName, nationalID,createdAt : new Date().toString()  }
}
      },
  reducer(state, action){
  state.fullName = action.payload.fullName
  state.nationalID = action.payload.nationalID
  state.createdAt = action.payload.createdAt
      }
    },
    updateName(state,action){
state.fullName = action.payload
    }
  } 
})


export default function customerReducer(state = initialStateCustomer, action){
  switch(action.type){
    case 'customer/createCustomer':
       return {...state, fullName : action.payload.fullName, nationalID : action.payload.nationalID, createdAt : action.payload.createdAt};
       case 'customer/updateName' :
        return {...state , fullName : action.payload}
       default : return state
  }
}


export const {createCustomer, updateName} = customerSlice.actions