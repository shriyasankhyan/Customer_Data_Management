import Router, { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { getOneCustomer, updateCustomerEmail, updateCustomerName, updateCustomerPhone } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function View(){
    const router = useRouter();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [customer, setCustomer] = useState({
        
    });

    const getData = async() =>{
        const custm = await dispatch(getOneCustomer(router.query.customer_id ||""))
        setCustomer(custm);
        setName(custm?.name ||"");
        setEmail(custm?.email || "");
        setPhone(custm?.phone || "");
    }

    useEffect(() =>{
      getData();
    },[router.query])

    const handleSubmit =() =>{
        if(name !== customer.name){
            dispatch(updateCustomerName(customer._id, name));
        }
        if(email !== customer.email){
            dispatch(updateCustomerEmail(customer._id, email));
        }
        if(phone !== customer.phone){
            dispatch(updateCustomerPhone(customer._id, phone));
        }
        Router.push('/')
    }

    return(
        <div className="justify-center text-center">
        <h1 className="font-bold text-4xl mb-12 mt-6">{name}</h1>
            <form onSubmit={() => handleSubmit()} className="w-full max-w-sm ml-auto mr-auto m-10">
            <div className="flex items-center border-b border-teal-500 py-2">
            <input required onChange={e => setName(e.target.value)} type="text" className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" value={name} aria-label="Full name"/>
             </div>
             <div className="flex items-center border-b border-teal-500 py-2">
             <input required type="email" onChange={(e) => setEmail(e.target.value)} className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" value={email} aria-label="Full name"/>
             </div>
             <div className="flex items-center border-b border-teal-500 py-2">
            <input required pattern="[0-9]{10}" value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" value={phone} />
             </div>
             <button type="submit" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center">Save</button>
             </form>
        </div>
    )
}