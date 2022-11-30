const express = require("express");
const router = express.Router();
const Exercise = require('./exercises.model')


router.get("/", async (req, res) => {
  try {
    const allExercises = await Exercise.find();
    return res.status(200).json(allExercises);
  } catch (error) {
    return res.status(500).json("Error getting exercises", error);
  }
});

module.exports = router;