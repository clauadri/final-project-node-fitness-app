const mongoose = require("mongoose");
const connectDb = require("../db");
const Workout = require('../../api/workouts/workouts.model')

const workouts = [
    {
        name: 'Rutina 1',
        exercise: ['63878a7143fb402893299b3f', '63878a7143fb402893299b3f', '63878a7143fb402893299b3f']
    },
    {
        name: 'Rutina 2',
        exercise: '63878a7143fb402893299b3f'
    },
    {
        name: 'Rutina 3',
        exercise: '63878a7143fb402893299b3f'
    },
]

const workoutsDocuments = workouts.map((workout) => new Workout(workout));

connectDb()
  .then(async () => {
    await Workout.collection.drop();
    console.log("Workout collection deleted correctly");
  })
  .catch((error) => console.log("Could not delete" + error))
  .then(async () => {
    await Workout.insertMany(workoutsDocuments);
    console.log("Workouts added correctly");
  })
  .catch((error) => console.log("Could not add data" + error))
  .finally(() => mongoose.disconnect());