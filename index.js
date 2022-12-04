const express = require("express");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const PORT = process.env.PORT;
const server = express();
const connectDb = require('./src/utils/db')
const indexRoutes = require('./src/api/index/index.routes')
const exercisesRoutes = require('./src/api/workouts/exercises/exercises.routes')
const workoutsRoutes = require('./src/api/workouts/workouts.routes')
const userRoutes = require('./src/api/user/user.routes')
const weightsRoutes = require('./src/api/weights/weights.routes')

connectDb();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/', indexRoutes);
server.use('/exercises', exercisesRoutes);
server.use('/workouts', workoutsRoutes);
server.use('/users', userRoutes);
server.use('/weights', weightsRoutes)

server.use((error, req, res, next) => {
  return res
      .status(error.status || 500)
      .json(error.message || "Unexpected error");
});

server.listen(PORT, () => {
  console.log(`El servidor se ha iniciado en http://localhost:${PORT}`);
});