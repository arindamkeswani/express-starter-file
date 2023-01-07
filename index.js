const express = require("express");
const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json()); //global middleware 
require('dotenv').config()

global.__basedir = __dirname;

const cookieParser = require('cookie-parser');

//---------------------------------------------------
//adding below snippet to enable localhost requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//---------------------------------------------------

const port = process.env.PORT || 5001;
var server = app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});

app.use(cookieParser());

const defaultRoute = require('./Routers/defaultRouter');

app.use("/", defaultRoute);

global.__port = port
