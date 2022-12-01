const mongoose = require("mongoose");
const connectDb = require("../db");
const Exercise = require('../../api/workouts/exercises/exercises.model')

const exercises = [
    {
        name: 'Press Banca A',
        description: '3 x 10 repeticiones',
        rest: '3 minutos',
        img: 'https://www.cambiatufisico.com/wp-content/uploads/jalones-frontales1.jpg',
    },
    {
        name: 'Press Banca B',
        description: '3 x 12 repeticiones',
        rest: '4 minutos',
        img: 'https://www.cambiatufisico.com/wp-content/uploads/jalones-frontales1.jpg',
    },
    {
        name: 'Press Banca C',
        description: '3 x 14 repeticiones',
        rest: '5 minutos',
        img: 'https://www.cambiatufisico.com/wp-content/uploads/jalones-frontales1.jpg',
    },
    {
        name: 'Press Banca D',
        description: '3 x 16 repeticiones',
        rest: '6 minutos',
        img: 'https://www.cambiatufisico.com/wp-content/uploads/jalones-frontales1.jpg',
    },
    {
      name: 'Press Banca E',
      description: '3 x 18 repeticiones',
      rest: '7 minutos',
      img: 'https://www.cambiatufisico.com/wp-content/uploads/jalones-frontales1.jpg'
    }
]

const exercisesDocuments = exercises.map((exercise) => new Exercise(exercise));

connectDb()
  .then(async () => {
    await Exercise.collection.drop();
    console.log("SEED :collection exercices deleted correctly");
  })
  .catch((error) => console.log("Could not delete" + error))
  .then(async () => {
    await Exercise.insertMany(exercisesDocuments);
    console.log("Exercises added correctly");
  })
  .catch((error) => console.log("Could not add data" + error))
  .finally(() => mongoose.disconnect());