import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String, 
        required : true
    },
    phone: {
        type : String, 
        required : true
    },
    createdAt :{
        type : Date,
        default : Date.now
    }
})

const customer = mongoose.model('customer', CustomerSchema);

export default customer;