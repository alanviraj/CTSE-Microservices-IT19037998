const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deliverySchema = new Schema({
    customerID: {
        type: String,
        required: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    customerPhone: {
        type: Number,
        required: true,
    },
    shippingAddress: {
        type: String,
        required: true,
    },
    orderID: {
        type: String,
        required: true,
    },
    deliveryStatus: {
        type: String,
        default: 'Pending',
        required: true,
    },
    createdAt: {
        type: Number,
        required: true,
    },
    updatedAt: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Delivery', deliverySchema);