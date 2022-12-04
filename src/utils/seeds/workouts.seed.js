const mongoose = require("mongoose");
const connectDb = require("../db");
const Workout = require('../../api/workouts/workouts.model');
const Exercise = require("../../api/workouts/exercises/exercises.model");

const workouts = [
{
  name: 'Rutina 1.1.1',
  requirements: ['Perder peso', 'Parte superior','A'],
  day1: ['Jalón al pecho A', 'Remo máquina A', 'Remo Mancuerna A','Curl alterno A','Curl polea A','Crunch A'],
  day2: ['Press Banca plano A', ' Press Banca inclinado A','Press mancuerna plano A','Flexiones A','Elevación frontal A','Triceps polea A'],
  day3: [' Sentadillas con barra A','Extensión cuadriceps A','Flexión de femoral A','Ascensión de cadera A','Deadlift A','Prensa piernas A']
},
{
  name: 'Rutina 1.1.2',
  requirements: ['Perder peso', 'Parte superior','B'],
  day1: ['Jalón al pecho A', 'Remo máquina A','Dominadas A', 'Remo Mancuerna A','Curl alterno A','Curl polea A','Crunch A','Plancha A'],
  day2: ['Press Banca plano A', ' Press Banca inclinado A','Press mancuerna plano A','Flexiones A','Shoulder press A','Elevación frontal A','Triceps polea A'],
  day3: [' Sentadillas con barra A', 'Lunges A','Extensión cuadriceps A','Flexión de femoral A','Ascensión de cadera A','Deadlift A','Prensa piernas A','Oblicuos A']
},
{
  name: 'Rutina 1.1.3',
  requirements: ['Perder peso', 'Parte superior','C'],
  day1: ['Jalón al pecho A', 'Remo máquina A','Dominadas A', 'Remo Mancuerna A','Curl alterno A','Curl polea A','Crunch A','Plancha A'],
  day2: ['Press Banca plano A', ' Press Banca inclinado A','Press mancuerna plano A','Flexiones A','Shoulder press A','Elevación frontal A','Triceps polea A'],
  day3: [' Sentadillas con barra A', 'Lunges A','Extensión cuadriceps A','Flexión de femoral A','Ascensión de cadera A','Deadlift A','Prensa piernas A','Oblicuos A']
},
{
  name: 'Rutina 1.2.1',
  requirements: ['Perder peso', 'Parte central','A'],
  day1: ['Jalón al pecho A', 'Remo máquina A','Dominadas A', 'Remo Mancuerna A','Curl alterno A','Curl polea A','Crunch A','Plancha A'],
  day2: ['Press Banca plano A', ' Press Banca inclinado A','Press mancuerna plano A','Flexiones A','Shoulder press A','Elevación frontal A','Triceps polea A'],
  day3: [' Sentadillas con barra A', 'Lunges A','Extensión cuadriceps A','Flexión de femoral A','Ascensión de cadera A','Deadlift A','Prensa piernas A','Oblicuos A']
},
{
  name: 'Rutina 1.2.2',
  requirements: ['Perder peso', 'Parte central','B'],
  day1: ['Jalón al pecho A', 'Remo máquina A','Dominadas A', 'Remo Mancuerna A','Curl alterno A','Curl polea A','Crunch A','Plancha A'],
  day2: ['Press Banca plano A', ' Press Banca inclinado A','Press mancuerna plano A','Flexiones A','Shoulder press A','Elevación frontal A','Triceps polea A'],
  day3: [' Sentadillas con barra A', 'Lunges A','Extensión cuadriceps A','Flexión de femoral A','Ascensión de cadera A','Deadlift A','Prensa piernas A','Oblicuos A']
},
{
  name: 'Rutina 1.2.3',
  requirements: ['Perder peso', 'Parte central','C'],
  day1: ['Jalón al pecho A', 'Remo máquina A','Dominadas A', 'Remo Mancuerna A','Curl alterno A','Curl polea A','Crunch A','Plancha A'],
  day2: ['Press Banca plano A', ' Press Banca inclinado A','Press mancuerna plano A','Flexiones A','Shoulder press A','Elevación frontal A','Triceps polea A'],
  day3: [' Sentadillas con barra A', 'Lunges A','Extensión cuadriceps A','Flexión de femoral A','Ascensión de cadera A','Deadlift A','Prensa piernas A','Oblicuos A']
},
{
  name: 'Rutina 1.3.1',
  requirements: ['Perder peso', 'Parte inferior','A'],
  day1: ['Jalón al pecho A', 'Remo máquina A','Dominadas A', 'Remo Mancuerna A','Curl alterno A','Curl polea A','Crunch A','Plancha A'],
  day2: ['Press Banca plano A', ' Press Banca inclinado A','Press mancuerna plano A','Flexiones A','Shoulder press A','Elevación frontal A','Triceps polea A'],
  day3: [' Sentadillas con barra A', 'Lunges A','Extensión cuadriceps A','Flexión de femoral A','Ascensión de cadera A','Deadlift A','Prensa piernas A','Oblicuos A']
},
{
  name: 'Rutina 1.3.2',
  requirements: ['Perder peso', 'Parte inferior','B'],
  day1: ['Jalón al pecho A', 'Remo máquina A','Dominadas A', 'Remo Mancuerna A','Curl alterno A','Curl polea A','Crunch A','Plancha A'],
  day2: ['Press Banca plano A', ' Press Banca inclinado A','Press mancuerna plano A','Flexiones A','Shoulder press A','Elevación frontal A','Triceps polea A'],
  day3: [' Sentadillas con barra A', 'Lunges A','Extensión cuadriceps A','Flexión de femoral A','Ascensión de cadera A','Deadlift A','Prensa piernas A','Oblicuos A']
},
{
  name: 'Rutina 1.3.3',
  requirements: ['Perder peso', 'Parte inferior','C'],
  day1: ['Jalón al pecho A', 'Remo máquina A','Dominadas A', 'Remo Mancuerna A','Curl alterno A','Curl polea A','Crunch A','Plancha A'],
  day2: ['Press Banca plano A', ' Press Banca inclinado A','Press mancuerna plano A','Flexiones A','Shoulder press A','Elevación frontal A','Triceps polea A'],
  day3: [' Sentadillas con barra A', 'Lunges A','Extensión cuadriceps A','Flexión de femoral A','Ascensión de cadera A','Deadlift A','Prensa piernas A','Oblicuos A']
},
{
  name: 'Rutina 2.1.1',
  requirements: ['Crecer musculo', 'Parte superior','A'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
{
  name: 'Rutina 2.1.2',
  requirements: ['Crecer musculo', 'Parte superior','B'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
{
  name: 'Rutina 2.1.3',
  requirements: ['Crecer musculo', 'Parte superior','C'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
{
  name: 'Rutina 2.2.1',
  requirements: ['Crecer musculo', 'Parte central','A'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
{
  name: 'Rutina 2.2.2',
  requirements: ['Crecer musculo', 'Parte central','B'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
{
  name: 'Rutina 2.2.3',
  requirements: ['Crecer musculo', 'Parte central','C'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
{
  name: 'Rutina 2.3.1',
  requirements: ['Crecer musculo', 'Parte inferior','A'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
{
  name: 'Rutina 2.3.2',
  requirements: ['Crecer musculo', 'Parte inferior','B'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
{
  name: 'Rutina 2.3.3',
  requirements: ['Crecer musculo', 'Parte inferior','C'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
{
  name: 'Rutina 3.1.1',
  requirements: ['Definir', 'Parte superior','A'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
{
  name: 'Rutina 3.1.2',
  requirements: ['Definir', 'Parte superior','B'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
{
  name: 'Rutina 3.1.3',
  requirements: ['Definir', 'Parte superior','C'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
{
  name: 'Rutina 3.2.1',
  requirements: ['Definir', 'Parte central','A'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
{
  name: 'Rutina 3.2.2',
  requirements: ['Definir', 'Parte central','B'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
{
  name: 'Rutina 3.2.3',
  requirements: ['Definir', 'Parte central','C'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
{
  name: 'Rutina 3.3.1',
  requirements: ['Definir', 'Parte inferior','A'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
{
  name: 'Rutina 3.3.2',
  requirements: ['Definir', 'Parte inferior','B'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
{
  name: 'Rutina 3.3.3',
  requirements: ['Definir', 'Parte inferior','C'],
  day1: ['Jalón al pecho B', 'Remo máquina B','Dominadas B', 'Remo Mancuerna B','Curl alterno B','Curl polea B','Crunch B','Plancha B'],
  day2: ['Press Banca plano B', ' Press Banca inclinado B','Press mancuerna plano B','Flexiones B','Shoulder press B','Elevación frontal B','Triceps polea B'],
  day3: [' Sentadillas con barra B', 'Lunges B','Extensión cuadriceps B','Flexión de femoral B','Ascensión de cadera B','Deadlift B','Prensa piernas B','Oblicuos B']
},
]



connectDb()
  .then(async () => {
    await Workout.collection.drop();
    console.log("Workout collection deleted correctly");
  })
  .catch((error) => console.log("Could not delete" + error))
  .then(async () => {
    for (const workout of workouts) {
      const exercises = [...workout.day1]; //
      let newExercise = [];
      for (const exercise of exercises) {
        const exerciseId = await Exercise.findOne({ name: exercise }).lean();
        newExercise = [...newExercise, exerciseId._id.toString()]
      
      }
      workout.day1 = [...newExercise];
    }

    for (const workout of workouts) {
      const exercises = [...workout.day2]; //
      let newExercise = [];
      for (const exercise of exercises) {
        const exerciseId = await Exercise.findOne({ name: exercise }).lean();
        newExercise = [...newExercise, exerciseId._id.toString()]
      
      }
      workout.day2 = [...newExercise];
    }

    for (const workout of workouts) {
      const exercises = [...workout.day3]; //
      let newExercise = [];
      for (const exercise of exercises) {
        const exerciseId = await Exercise.findOne({ name: exercise }).lean();
        newExercise = [...newExercise, exerciseId._id.toString()]
      
      }
      workout.day3 = [...newExercise];
    }
    
    const workoutsDocuments = workouts.map((workout) => new Workout(workout));
    await Workout.insertMany(workoutsDocuments);
    console.log("Workouts added correctly");
  })
  .catch((error) => console.log("Could not add data" + error))
  .finally(() => mongoose.disconnect());