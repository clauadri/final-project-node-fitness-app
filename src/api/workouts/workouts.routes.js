const express = require("express");
const router = express.Router();
const Workout = require('./workouts.model')

router.get("/", async (req, res) => {
    try {
      const allWorkouts = await Workout.find().populate('exercise');
      return res.status(200).json(allWorkouts);
    } catch (error) {
      return res.status(500).json("Error getting workouts", error);
    }
  });
  
  module.exports = router;