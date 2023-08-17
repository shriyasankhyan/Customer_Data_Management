import Customer from "../model/Customer.js";

export const addCustomer = async (request, response) =>{
    try{
        const newCustomer = await Customer.create({
            name : request.body.name,
            email : request.body.email,
            phone : request.body.phone,
            createdAt : Date.now()
        })
        await newCustomer.save();
        return response.status(200).json(newCustomer);
    }catch(error){
        return response.status(500).json(error.message)
    } 
}


export const getOneCustomer = async (request, response) =>{
    try{
        const customer = await Customer.findById(request.params.id)    
        return response.status(200).json(customer);
    }catch(error){
        return response.status(500).json(error.message)
    } 
}

export const getAllCustomers = async (request, response) =>{
    try{
        const customers = await Customer.find({}).sort({'createdAt' : -1})
    
        return response.status(200).json(customers);
    }catch(error){
        return response.status(500).json(error.message)
    } 
}

export const updateCustomerName = async (request, response) =>{
    try{  
        await Customer.findOneAndUpdate(
            {_id : request.params.id},
            {name: request.body.name}
        )
    
        const customer = await Customer.findById(request.params.id)
        return response.status(200).json(customer);
    }catch(error){
        return response.status(500).json(error.message)
    } 
}

export const updateCustomerEmail = async (request, response) =>{
    try{  
        await Customer.findOneAndUpdate(
            {_id : request.params.id},
            {email: request.body.email}
        )
    
        const customer = await Customer.findById(request.params.id)
        return response.status(200).json(customer);
    }catch(error){
        return response.status(500).json(error.message)
    } 
}

export const updateCustomerPhone = async (request, response) =>{
    try{  
        await Customer.findOneAndUpdate(
            {_id : request.params.id},
            {phone : request.body.phone}
        )
    
        const customer = await Customer.findById(request.params.id)
        return response.status(200).json(customer);
    }catch(error){
        return response.status(500).json(error.message)
    } 
}

export const deleteCustomer = async (request, response) =>{
    try{  
        const customer = await Customer.findByIdAndDelete(request.params.id);

        return response.status(200).json(customer);
    }catch(error){
        return response.status(500).json(error.message)
    } 
}