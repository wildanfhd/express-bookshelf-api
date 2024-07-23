const express = require("express")
const app = express();
const cors = require("cors");
const routes = require("./routes");
const bodyParser = require("express").json;

// CORS
app.use(cors())

// Accepting POST Form Data (parse requests of content-type - application/json)
app.use(bodyParser());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Registering Routes
app.use(routes)

module.exports = app;