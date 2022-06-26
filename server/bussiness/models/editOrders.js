import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    customerID: String,
    orderNo: Number,    
    orders: [{
        type: String
    }],
    totalAmount: Number,
});

const orderMessage = mongoose.model('orderSchema', orderSchema);

export default orderMessage;