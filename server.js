/*taking express dependency into our project*/
const express = require("express");

/*taking mongoose dependency into our project*/
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

/*taking cors dependency into our project*/
const cors = require("cors");

/*taking dontenv dependency into our project*/
const dontenv = require("dotenv");
const app = express();
require("dotenv").config();

/*initializing or assingning the port number...if port 8070 is not available use another suitable port..for that only we have used ||..*/
const PORT = process.env.PORT || 8072;

/*using the cors dependency..8070*/
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

// mongoose.connect(URL);

/**CHecking whether the database is connected or not */
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection Success!");
})

// /*accessing adminPaymentRoute.js*/
const deliveryRoute = require("./routes/deliveryRoute");

// /*using express accesing the route*/
app.use(deliveryRoute());


/**Checking the port number whether the project runs on the correct port number or not */
app.listen(PORT, () => {
    console.log(`Service is up and running on port number: ${PORT}`);
})

module.exports = app;