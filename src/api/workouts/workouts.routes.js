const express = require("express");
const router = express.Router();
const Workout = require('./workouts.model')
const { isAuth, isAdmin } = require("../../middleware/auth");
router.get("/", async (req, res) => {
    try {
      const allWorkouts = await Workout.find().populate('exercise');
      return res.status(200).json(allWorkouts);
    } catch (error) {
      return res.status(500).json("Error getting workouts", error);
    }
});
router.get("/id/:id",  async (req, res) => {
    try {
      const id = req.params.id;
      const workoutById = await Workout.findById(id);
      return res.status(200).json(workoutById);
    } catch (error) {
      return res.status(500).json("Error getting workouts by id", error);
    }
});
router.get("/name/:name",  async (req, res) => {
    try {
      const name = req.params.name;
      const workoutByName = await Workout.findOne({name: name});
      return res.status(200).json(workoutByName);
    } catch (error) {
      return res.status(500).json("Error getting workouts by name", error);
    }
});

router.post("/create",[isAuth], async (req, res) => {
    try {
      const workout = req.body;
      const newWorkout = new Workout(workout);
      console.log(newWorkout);
      const createdWorkout = await newWorkout.save();
      console.log(createdWorkout)
      return res.status(201).json(createdWorkout);
    } catch (error) {
      return "Error creating the workout", error;
    }
});
router.delete("/delete/:id",[isAdmin],  async (req, res) => {
    try {
      const id = req.params.id;
      await Workout.findByIdAndDelete(id);
      return res.status(200).json("Workout deleted correctly");
    } catch (error) {
      return res.status(500).json("Error with workout delete");
    }
});
  
router.put("/edit/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const workout = req.body;
      console.log(workout);
      const editWorkout = new Workout(workout);
      editWorkout._id = id;
      const workoutUpdated = await Workout.findByIdAndUpdate(
        id,
        editWorkout
      );
      console.log(workoutUpdated);
      return res
        .status(200)
        .json({
          mensaje: "Workout edit correctly !!",
          workoutModified: workoutUpdated,
        });
    } catch (error) {
      return res.status(500).json("Error with edit workout");
    }
});
  
module.exports = router;