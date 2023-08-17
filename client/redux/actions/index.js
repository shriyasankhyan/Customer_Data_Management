import axios from 'axios'
import { ADD_NEW_CUSTOMER, GET_ALL_CUSTOMERS, GET_ONE_CUSTOMER, UPDATE_CUSTOMER_NAME, UPDATE_CUSTOMER_EMAIL, UPDATE_CUSTOMER_PHONE, DELETE_CUSTOMER } from './type';

const API_URL = 'http://localhost:8000';

export const addNewCustomer= (name, email, phone) => async(dispatch)=> {
    try{
        const res = await axios.post(`${API_URL}/customers`, {name, email, phone})
        dispatch({type : ADD_NEW_CUSTOMER, payload : res.data});
    }catch(error){
        console.log("Error while calling addNewCustomer API ", error.message);
    }
}

export const getAllCustomers = () => async(dispatch)=> {
    try{
        const res = await axios.get(`${API_URL}/customers`)
        dispatch({type : GET_ALL_CUSTOMERS, payload : res.data});
    }catch(error){
        console.log("Error while calling getAllCustomers API ", error.message);
    }
}

export const getOneCustomer = (id) => async()=> {
    try{
        const res = await axios.get(`${API_URL}/customer/${id}`)
        return res.data
    }catch(error){
        console.log("Error while calling getOneCustomer API ", error.message);
    }
}

export const updateCustomerName = (id, data) => async(dispatch) => {
    try{
        const res = await axios.put(`${API_URL}/customer-name/${id}`, {data})
        dispatch({type : UPDATE_CUSTOMER_NAME, payload : res.data});
    }catch(error){
        console.log("Error while calling updateCustomerName API ", error.message);
    }
}

export const updateCustomerEmail = (id, data) => async(dispatch) => {
    try{
        const res = await axios.put(`${API_URL}/customer-email/${id}`, {data})
        dispatch({type : UPDATE_CUSTOMER_EMAIL, payload : res.data});
    }catch(error){
        console.log("Error while calling updateCustomerEmail API ", error.message);
    }
}

export const updateCustomerPhone = (id, data) => async(dispatch) => {
    try{
        const res = await axios.put(`${API_URL}/customer-phone/${id}`, {data})
        dispatch({type : UPDATE_CUSTOMER_PHONE, payload : res.data});
    }catch(error){
        console.log("Error while calling updateCustomerPhone API ", error.message);
    }
}

export const deleteCustomer = (id) => async(dispatch) => {
    try{
        const res = await axios.delete(`${API_URL}/customers/${id}`)
        dispatch({type : DELETE_CUSTOMER, payload : res.data});
    }catch(error){
        console.log("Error while calling deleteCustomer API ", error.message);
    }
}
