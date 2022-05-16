const express = require("express");
const router = express.Router();
const deliveryController = require("../controllers/deliveryController");

module.exports = function () {
    router.post('/delivery/create-delivery', deliveryController.createDeliveryRequest);
    router.get('/delivery/get-all-deliveries', deliveryController.getAllDeliveryRequestsAdmin);
    router.get('/delivery/get-all-deliveries/:customerID', deliveryController.getAllSpecificCustomerDeliveryRequests);
    router.get('/delivery/get-one-delivery/:id', deliveryController.getSingleCustomerDeliveryRequest);
    router.put('/delivery/update-one-delivery/:id', deliveryController.updateDeliveryStatus);
    router.delete('/delivery/delete/:id', deliveryController.deleteRequestDelivery);
    return router;
}