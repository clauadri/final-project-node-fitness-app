const express = require("express");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const PORT = process.env.PORT;
const server = express();

//conectDb();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });