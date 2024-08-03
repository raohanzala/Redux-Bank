// import { createStore, combineReducers } from "redux";

// const initialStateAccount = {
//   balance : 0,
//   loan : 0,
//   loanPurpose : ''
// }

// const initialStateCustomer = {
//   fullName : '',
//   nationalID: '',
//   createdAt : ''
// }

// function accountReducer(state = initialStateAccount, action){
// switch(action.type){
//   case 'account/deposit':
//     return {...state, balance: state.balance +action.payload}
//     case 'account/withdraw':
//       return {...state, balance : state.balance - action.payload}
//       case 'account/requestLoan' : 
//       if(state.loan >0) return state;
//       return {...state, loan : action.payload, balance : state.balance + state.loan}
//       case 'account/payLoan':
//         return {...state, loan : 0, loanPurpose : '', balance:state.balance- state.loan}

//         default : return state
// }
// }

// function customerReducer(state = initialStateCustomer, action){
//   switch(action.type){
//     case 'customer/createCustomer':
//        return {...state, fullName : action.payload.fullName, nationalID : action.payload.nationalID, createdAt : action.payload.createdAt};
//        case 'cusotmer/updateName' :
//         return {...state , fullName : action.payload}
//        default : return state
//   }

// }

// const rootReducer = combineReducers({
//   account : accountReducer,
//   customer : customerReducer
// })

// const store = createStore(accountReducer)
// // store.dispatch({type: 'account/deposit', payload : 500})

// function deposit(amount){
//  return {type: 'account/deposit', payload : amount}
// }

// function withdraw(amount){
//   return {type: 'account/withdraw', payload : amount}
// }

// function requestLoan(amount, purpose){
//   return {type: 'account/requestLoan', payload : {amount, purpose} }
// }


// function payloan(amount){
//   return {type: 'account/payLoan'}
// }

// store.dispatch(desposit(500))

// function createCustomer (fullName, nationalID){
//   return {type : 'customer/createCustomer', payload : {fullName, nationalID, createdAt : new Date().toString()}}
// }

// function updateName(fullName){
// return {type : 'account/updateName', payload : fullName}
// }

