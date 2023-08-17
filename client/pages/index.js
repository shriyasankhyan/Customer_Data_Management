import Head from 'next/head';
import {useDispatch, useSelector} from "react-redux";
import Router from 'next/router';
import { deleteCustomer, getAllCustomers } from '../redux/actions';
import Link from 'next/link'
import { useEffect } from 'react';

export default function Home() {

  const customers = useSelector(state => state.customerReducer)

  const handleAddCustomer = (e) =>{
    Router.push("/customers")
  }

  useEffect(() =>{
    dispatch(getAllCustomers());
  },[])

  const dispatch = useDispatch();

  return (
    <div className='customers-page' >
      <Head>
        <title>Customer Data Management</title>
      </Head>
      <div>
      <h1 className='font-bold text-4xl mb-12 mt-6'>ALL CUSTOMERS</h1>
      {customers.map((customer) =>{
        return <div className="inline-block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow m-5" key={customer._id}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{customer.name}</h5>

    <p className="mb-3 font-normal text-gray-700">{customer.email}.</p>
    <p className="mb-3 font-normal text-gray-700">{customer.phone}.</p>
    <Link href={{pathname : 'customer/view', query : {customer_id : customer._id}}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center m-1">View Customer</Link>
    <button onClick={() => dispatch(deleteCustomer(customer._id))} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center m-1">Delete Customer</button>
</div>
      })}
      <div className='w-screen justify-center mt-10'>
      <button onClick={(e) => handleAddCustomer(e)} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center m-1">Add Customer</button>
      </div>
    
      </div>
       
    </div>
  )
}