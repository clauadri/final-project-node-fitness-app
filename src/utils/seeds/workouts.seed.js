const mongoose = require("mongoose");
const connectDb = require("../db");
const Workout = require('../../api/workouts/workouts.model');
const Exercise = require("../../api/workouts/exercises/exercises.model");

const workouts = [
    {
        name: 'Rutina 1',
        requierements: ['Perder peso', 'Delgado'],
        exercise: ['Press Banca A', 'Press Banca B', 'Press Banca C']
    },
    {
        name: 'Rutina 2',
        requirements: ['Crecer musculo', 'Atleta'],
        exercise: ['Press Banca D', 'Press Banca A']
    }
]



connectDb()
  .then(async () => {
    await Workout.collection.drop();
    console.log("Workout collection deleted correctly");
  })
  .catch((error) => console.log("Could not delete" + error))
  .then(async () => {
    for (const workout of workouts) {
      const exercises = [...workout.exercise]; //
      let newExercise = [];
      for (const exercise of exercises) {
        const exerciseId = await Exercise.findOne({ name: exercise }).lean();
        newExercise = [...newExercise, exerciseId._id.toString()]
      
      }
      workout.exercise = [...newExercise];
    }
    const workoutsDocuments = workouts.map((workout) => new Workout(workout));
    await Workout.insertMany(workoutsDocuments);
    console.log("Workouts added correctly");
  })
  .catch((error) => console.log("Could not add data" + error))
  .finally(() => mongoose.disconnect());