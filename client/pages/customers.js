import {useState} from "react";
import {useDispatch} from "react-redux"
import { addNewCustomer } from "../redux/actions";
import Router from 'next/router'

export default function Customers(){
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addNewCustomer(name,email,phone));
        setName("");
        setEmail("");
        setPhone("");
        Router.push("/")
    }
    
    return(
        <div className="customers-page">
            <h1 className="font-bold text-4xl mb-12 mt-6">Enter all the details here</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="grid gap-6 mb-6 w-1/2 ml-auto mr-auto md:w-1/4">
                    <div>
                        <input 
                            type="text" 
                            id="name" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                            placeholder="Enter your name here" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input 
                            type="email" 
                            id="email" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                            placeholder="Enter your email here (must have @)" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>   
                    <div className="mb-6">
                        <input type="tel"
                            id="phone" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                            placeholder="Enter your phone number here (10 digit number)" 
                            pattern="[0-9]{10}" 
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </div>
            </form>    
        </div>
    )
}