const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv").config();
const Cookie = require("js-cookie");


module.exports = {
    express,
    mongoose,
    cookieParser,
    helmet,
    cors,
    dotenv,
    Cookie,
}