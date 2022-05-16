const deliveryModel = require("../models/deliveryModel");
const utils = require("../helper/utilsHelper")

exports.createDeliveryRequest = async function (req, res) {
    try {
        const newDeliveryRequest = new deliveryModel({
            customerID: req.body.customerID,
            customerName: req.body.customerName,
            customerPhone: req.body.customerPhone,
            shippingAddress: req.body.shippingAddress,
            orderID: req.body.orderID,
            deliveryStatus: req.body.deliveryStatus,
            createdAt: utils.timestamp(),
            updatedAt: utils.timestamp(),
        });
        await newDeliveryRequest.save();
        res.status(200).send({ status: "Delivery Request Success", data: newDeliveryRequest });
        console.log(newDeliveryRequest);
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "Error On Request Delivery!", error: error.message });
        throw error;
    }
}

exports.getAllDeliveryRequestsAdmin = async function (req, res) {
    try {
        const requestDeliveryData = await deliveryModel.find();
        res.status(200).send({ status: "Found All Request Deliveries", data: requestDeliveryData });
        console.log(requestDeliveryData);
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "Error On Finding All Request Deliveries!", error: error.message });
        throw error;
    }
}

exports.getAllSpecificCustomerDeliveryRequests = async function (req, res) {
    try {
        let customerID = req.params.customerID
        const requestDeliveryData = await deliveryModel.find({ "customerID": customerID });
        res.status(200).send({ status: "Found All Request Deliveries Related To A Customer", data: requestDeliveryData });
        console.log(requestDeliveryData);
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "Error On Finding All Request Deliveries Related To A Customer!", error: error.message });
        throw error;
    }
}

exports.getSingleCustomerDeliveryRequest = async function (req, res) {
    try {
        let deliveryID = req.params.id;
        const getSingleRequestDeliveryData = await deliveryModel.findById(deliveryID);
        res.status(200).send({ status: "Found The Request Delivery Related To A Customer", data: getSingleRequestDeliveryData });
        console.log(getSingleRequestDeliveryData);
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "Error On Finding A Request Delivery Related To A Customer!", error: error.message });
        throw error;
    }
}

exports.updateDeliveryStatus = async function (req, res) {
    try {
        let deliveryID = req.params.id;
        const statusUpdate = {
            deliveryStatus: req.body.deliveryStatus,
        }
        const updateDeliveryStatus = await deliveryModel.findByIdAndUpdate(deliveryID, statusUpdate);
        const getSingleDelivery = await deliveryModel.findById(deliveryID);
        res.status(200).send({ status: "Delivery Status Updated", data: getSingleDelivery });
        console.log(getSingleDelivery);
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "Error Occured While Updating The Delivery Satus!", error: error.message });
        throw error;
    }
}

exports.deleteRequestDelivery = async function (req, res) {
    try {
        let deliveryID = req.params.id;
        await deliveryModel.findByIdAndDelete(deliveryID); 
        res.status(200).send({ status: "Delivery Request Deleted!" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "Error Occured While Deleting A Delivery!", error: error.message });
        throw error;
    }
}