import * as actionTypes from "../actions/type"

const initialState= [];

const todoReducer = (state = initialState, action) =>{

    switch(action.type){
        case actionTypes.ADD_NEW_CUSTOMER:
            return [action.payload, ...state];
        case actionTypes.GET_ALL_CUSTOMERS:
            return action.payload
        case actionTypes.UPDATE_CUSTOMER_NAME:
            return state.map(customer =>(
                customer._id === action.payload._id ? {...customer, name : action.payload.name} : customer
            ))
        case actionTypes.UPDATE_CUSTOMER_EMAIL:
            return state.map(customer =>(
               customer._id === action.payload._id ? {...customer, email : action.payload.email} : customer
            ))
        case actionTypes.UPDATE_CUSTOMER_PHONE:
            return state.map(customer =>(
               customer._id === action.payload._id ? {...customer, phone : action.payload.phone} : customer
           ))
        case actionTypes.DELETE_CUSTOMER:
            return state.filter(customer =>(
                customer._id !== action.payload._id 
            ))
        default:
            return state;
    }
}

export default todoReducer;