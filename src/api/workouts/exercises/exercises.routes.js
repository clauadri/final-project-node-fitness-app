const express = require("express");
const router = express.Router();
const Exercise = require('./exercises.model');
const upload = require("../../../middleware/file");

router.get("/", async (req, res) => {
  try {
    const allExercises = await Exercise.find();
    return res.status(200).json(allExercises);
  } catch (error) {
    return res.status(500).json("Error getting exercises", error);
  }
});
router.get("/:id",  async (req, res) => {
  try {
    const id = req.params.id;
    const exerciseById = await Exercise.findById(id);
    return res.status(200).json(exerciseById);
  } catch (error) {
    return res.status(500).json("No se a podido encontrar el ejercicio por id", error);
  }
});
router.get("/:name",  async (req, res) => {
  try {
    const name = req.params.name;
    const exerciseByName = await Exercise.findOne({name: name});
    return res.status(200).json(exerciseByName);
  } catch (error) {
    return res.status(500).json("No se a podido encontrar el ejercicio por nombre", error);
  }
});
router.post("/create", upload.single("img"), async (req, res) => {
  try {
    const exercise = req.body;
    if(req.file){
      exercise.img = req.file.path;
    }
     console.log(req.body);
    const newExercise = new Exercise(exercise);
    console.log(newExercise);
    const createdExercise = await newExercise.save();
    console.log(createdExercise)
    return res.status(201).json(createdExercise);
  } catch (error) {
    return "Error al crear el ejercicio", error;
  }
});

module.exports = router;