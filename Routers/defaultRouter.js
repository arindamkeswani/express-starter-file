const express = require("express");
const defaultRoute = express.Router();

const {getDefaultRoute} = require("../Controllers/defaultController");

defaultRoute.route('')
.get(getDefaultRoute)

module.exports = defaultRoute;