import express from "express";
import {addCustomer, getOneCustomer, getAllCustomers, updateCustomerName, updateCustomerEmail, updateCustomerPhone, deleteCustomer  } from "../controller/customer-controller.js";
const route = express.Router();

route.post('/customers', addCustomer);
route.get('/customer/:id',getOneCustomer );
route.get('/customers', getAllCustomers);
route.put('/customer-name/:id', updateCustomerName);
route.put('/customer-email/:id', updateCustomerEmail);
route.put('/customer-phone/:id', updateCustomerPhone);
route.delete('/customers/:id', deleteCustomer);

export default route;